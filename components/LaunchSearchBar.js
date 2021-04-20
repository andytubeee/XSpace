import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import LaunchesCard from "./LaunchesCard";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";



export default function LaunchSearch(props) {
  const [mission_id, set_missionID] = useState("")

  var LAUNCH_QUERY = gql`
  query LaunchSearchQuery {
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


  const { loading, error, data } = useQuery(LAUNCH_QUERY);
  const [amount, setAmount] = useState(0);
  const [newData, setNewData] = useState([]);
  const [searched, setSearched] = useState(false);
  const [filteredFlight, setFilteredFlight] = useState([]);

  const searchLaunch = (allLaunch, missionID) => {
    let matchLaunch = []
    Array.from(allLaunch).forEach(launch => {
      if (Array.from(launch.mission_id).includes(missionID)) {
        matchLaunch.push(launch)
      }
    })
    return matchLaunch
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

    if (!searched) {
      if (data) {
        if (searchLaunch(Array.from(data.launches), mission_id).length == 0) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "No Launch Found with Given ID",
          });
        } else {
          setFilteredFlight(searchLaunch(Array.from(data.launches), mission_id))
          setSearched(true)
        }
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
          <label>Mission ID</label>
          <input
            className="form-control"
            placeholder="ID"
            disabled={searched}
            style={searched ? { cursor: "not-allowed" } : { cursor: "text" }}
            onChange={(e) => {
              if (!searched) {
                set_missionID(e.target.value)
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
              return <LaunchesCard launch={launch} id={index} />
            })}
          </>
        )
      }


      <footer className='text-center' style={filteredFlight.length < 1 ? {
        position: "absolute",
        left: 0,
        bottom: 20,
        right: 0,
      } : { marginBottom: 20 }}>
        Developed by <a href="https://www.github.com/andytubeee">Andrew Yang</a> &copy; {new Date().getFullYear()}
      </footer >
    </>
  );
}
