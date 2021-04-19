import axios from 'axios'

export default function LaunchesCard(props) {
  const {
    mission_name,
    launch_year,
    launch_success,
    launch_date_local,
    mission_id
  } = props.launch;
  const { rocket_name, rocket_type, rocket } = props.launch.rocket;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const getURLEnding = (url) => {
    return String(String(url).split('/')[4]).split('_').join(' ')
  }

  return (
    <>
      <div className="border mb-3 rounded p-3">
        <p>
          <strong>Mission Name:</strong> {mission_name}
        </p>
        <p>
          <strong>Mission ID:</strong> {Array.from(mission_id).length > 0 ? Array.from(mission_id).join(', ') : "Null"}
        </p>
        <p>
          <strong>Launch Year:</strong> {launch_year}
        </p>
        <p>
          <strong>Launch Date:</strong> {launch_date_local}
        </p>
        {launch_success != null && (
          <p>
            <strong>Launch Success:</strong>{" "}
            <span className={launch_success ? "text-success" : "text-danger"}>
              {capitalizeFirstLetter(launch_success.toString())}
            </span>
          </p>
        )}
        {launch_success == null && (
          <p>
            <strong>Launch Success:</strong>{" "}
            <span className="text-secondary">{"Null"}</span>
          </p>
        )}

        <button
          class="btn btn-info"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#rocketInfo${props.id}`}
          aria-expanded="false"
          aria-controls="rocketInfo"
        >
          View Rocket Info
        </button>
        <div class="collapse mt-4" id={`rocketInfo${props.id}`}>
          <p>
            <strong>Rocket Name:</strong> {rocket_name}
          </p>
          <p>
            <strong>Rocket Type:</strong> {rocket_type}
          </p>
          <p>
            <strong>Wikipedia Page:</strong> <a href={rocket.wikipedia} target="__blank">{getURLEnding(rocket.wikipedia)}</a>
          </p>
        </div>
      </div>
    </>
  );
}
