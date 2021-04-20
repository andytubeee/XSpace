import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import LaunchesCard from "./LaunchesCard";
import Swal from "sweetalert2";
import React, { useState, useEffect } from "react";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
    mission_name
    launch_year
    id
    mission_id
    launch_date_local
    launch_success
    links {
      video_link
    }
    rocket {
      rocket_name
      rocket_type
      rocket {
        wikipedia
      }
    }
  }
  }
`;


export default function LaunchesGenerator(props) {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  const [amount, setAmount] = useState(0);
  const [newData, setNewData] = useState([]);
  const [ready, setReady] = useState(false);
  const [generated, setGenerated] = useState([])

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

  useEffect(() => {
    if (data && amount) {
      setGenerated(shuffle(Array.from(data.launches))
        .splice(0, amount))
    }
  }, [amount])

  const handleGenerateClick = () => {
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `${error.message}`,
      });
    }
    if (loading) {
      let timerInterval
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
            text: `More than amount of data on server, the max is ${Array.from(data.launches).length
              }`,
          });
          setAmount(Array.from(data.launches).length);
        }

        // Error and exception handling
        if (amount == 0) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: `You cannot search for 0 query`,
          });
        }
        else if (amount % 1 != 0) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: `Floats?!?!`,
          });
        }
        else {
          setReady(true);
        }
      } else {
        setReady(false);
      }
    }
  };

  // Filter dropdown component
  const [filterOptions] = useState([
    'Random',
    'Mission ID',
    'Mission Name',
    'Launch Year',
    'Launch Success'
  ])
  const [curFilter, setCurFilter] = useState(filterOptions[0])

  useEffect(() => {
    console.log(curFilter);
  }, [curFilter])


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

          <div className="d-flex justify-content-between align-items-center mt-3">
            <div class="form-group d-inline">
              <label for="filter-selector">Filter</label>
              <select class="form-control" id="filter-selector"
                disabled={!ready}
                onChange={e => setCurFilter(e.currentTarget.value)}
              >
                {filterOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <button
              type="button"
              class="btn btn-primary mt-3"
              onClick={handleGenerateClick}
            >
              {ready ? "Clear" : "Generate"}
            </button>
          </div>

        </div>

      </form>

      {ready && (
        <>
          {data &&
            Array.from(generated).map((launch, index) => (
              <LaunchesCard launch={launch} id={index} />
            ))}
        </>
      )}

      <footer className='text-center' style={(!ready || amount <= 1) ? {
        position: "absolute",
        left: 0,
        bottom: 20,
        right: 0,
      } : { marginBottom: 20 }}>
        Developed by <a href="https://www.github.com/andytubeee">Andrew Yang</a> &copy; {new Date().getFullYear()}
      </footer>
    </>
  );
}
