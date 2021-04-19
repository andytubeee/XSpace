import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import LaunchesCard from "./LaunchesCard";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import LaunchSearchResultCard from "./LaunchSearchResultCard";



export default function LaunchSearch(props) {
  const [flight_id, set_flightID] = useState(1)

  var LAUNCH_QUERY = gql`
  query LaunchSearchQuery {
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


  const { loading, error, data } = useQuery(LAUNCH_QUERY);
  const [amount, setAmount] = useState(0);
  const [newData, setNewData] = useState([]);
  const [searched, setSearched] = useState(false);
  const [filteredFlight, setFilteredFlight] = useState([]);

  const searchLaunch = (allLaunch, flightNumber) => {
    return Array.from(allLaunch).filter(launch => launch.flight_number === flightNumber);
  }

  const handleSearchClick = () => {
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

    if (!searched) {
      if (data) {
        setFilteredFlight(searchLaunch(Array.from(data.launches), Number(flight_id)))
        setSearched(true)
      }
    } else {
      setSearched(false)
    }
  }

  const router = useRouter();
  return (
    <>
      <hr />
      <button className="btn btn-secondary" onClick={() => router.push("/")}>
        Back
      </button>
      <h1 className="display-4 my-3 text-center">Launch Search</h1>
      <form>
        <div className="form-group d-flex flex-column">
          <label>Flight ID</label>
          <input
            type="number"
            className="form-control"
            placeholder="ID"
            disabled={searched}
            style={searched ? { cursor: "not-allowed" } : { cursor: "text" }}
            onChange={(e) => {
              if (!searched) {
                set_flightID(e.target.value)
              }
            }}
          ></input>
          <button
            type="button"
            class="btn btn-primary mt-3 align-self-end"
            onClick={handleSearchClick}
          >
            {!searched ? "Search" : "Clear"}
          </button>
        </div>
      </form>

      {
        searched && (
          <>
            {Array.from(filteredFlight).map((launch, index) => {
              return <LaunchSearchResultCard launch={launch} id={index} />
            })}
          </>
        )
      }

    </>
  );
}
