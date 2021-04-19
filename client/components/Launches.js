import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import LaunchesCard from "./LaunchesCard";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
      launch_year
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

export default function Launches(props) {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  const [amount, setAmount] = useState(0);
  const [newData, setNewData] = useState([]);
  const [ready, setReady] = useState(false);

  const router = useRouter();

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  const handleGenerateClick = () => {
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `${error.message}`,
      });
    }
    if (loading) {
      Swal.fire({
        title: "Loading!",
        html: "Please be patient...",
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          timerInterval = setInterval(() => {
            const content = Swal.getContent();
            if (content) {
              const b = content.querySelector("b");
              if (b) {
                b.textContent = Swal.getTimerLeft();
              }
            }
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("Should be ready now!");
        }
      });
    }

    if (data) {
      if (!ready) {
        if (amount > Array.from(data.launches).length) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: `More than amount of data on server, the max is ${
              Array.from(data.launches).length
            }`,
          });
          setAmount(Array.from(data.launches).length);
        }
        if (amount == 0) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: `You cannot search for 0 query`,
          });
        } else {
          setReady(true);
        }
      } else {
        setReady(false);
      }
    }
  };

  return (
    <>
      <hr />
      <button className="btn btn-secondary" onClick={() => router.push("/")}>
        Back
      </button>
      <h1 className="display-4 my-3 text-center">Launches Generator</h1>
      <form>
        <div className="form-group d-flex flex-column">
          <label for="exampleInputPassword1">Number of Entries</label>
          <input
            type="number"
            className="form-control"
            placeholder="Amount"
            disabled={ready}
            style={ready ? { cursor: "not-allowed" } : { cursor: "text" }}
            min={"1"}
            onChange={(e) => {
              if (!ready) {
                setAmount(e.target.value);
              }
            }}
          ></input>
          <button
            type="button"
            class="btn btn-primary mt-3 align-self-end"
            onClick={handleGenerateClick}
          >
            {ready ? "Clear" : "Generate"}
          </button>
        </div>
      </form>

      {ready && (
        <>
          {data &&
            shuffle(Array.from(data.launches))
              .splice(0, amount)
              .map((launch, index) => (
                <LaunchesCard launch={launch} id={index} />
              ))}
        </>
      )}
    </>
  );
}
