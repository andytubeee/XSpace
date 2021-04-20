import YouTube from 'react-youtube';
import { Player } from '@lottiefiles/react-lottie-player';

export default function LaunchesCard(props) {
  const {
    mission_name,
    launch_year,
    launch_success,
    launch_date_local,
    mission_id,
    links
  } = props.launch;
  const { rocket_name, rocket_type, rocket } = props.launch.rocket;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const getURLEnding = (url) => {
    return String(String(url).split('/')[4]).split('_').join(' ')
  }

  const getYouTubeID = (url) => {
    return String(url).split('=')[1]
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
        <div className="d-flex justify-content-between flex-wrap" style={{ width: "20vmax" }}>

          <button
            class="btn btn-info mb-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#rocketInfo${props.id}`}
            aria-expanded="false"
            aria-controls="rocketInfo"
          >
            View Rocket Info
        </button>
          <button
            class="btn btn-danger mb-3"
            style={{ color: "white", background: "#ff3232" }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#launchVideo${props.id}`}
            aria-expanded="false"
            aria-controls="rocketInfo"
          >
            Watch YouTube Video
        </button>
        </div>
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

        <div className="collapse mt-3" id={`launchVideo${props.id}`}>
          {/* <Player
            autoplay
            loop
            src="https://assets9.lottiefiles.com/private_files/lf30_pxhw9ty3.json"
            style={{ height: '200px', width: '200px' }}
          /> */}
          <div style={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            paddingTop: "56.25%",
          }}>
            <iframe id={`launchVideo${props.id}player`} type="text/html" style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              width: "100%",
              height: "100%"
            }}
              src={`https://www.youtube.com/embed/${getYouTubeID(links.video_link)}`}
              frameborder="0"></iframe>
          </div>
          {/* <YouTube videoId={getYouTubeID(links.video_link)} /> */}
        </div>
      </div>
    </>
  );
}
