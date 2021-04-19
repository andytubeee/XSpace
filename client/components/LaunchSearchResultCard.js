export default function LaunchSearchResultCard(props) {
    const {
        mission_name,
        launch_year,
        launch_success,
        launch_date_local,
    } = props.launch;
    const { rocket_id, rocket_name, rocket_type } = props.launch.rocket;

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <>
            <h3 style={{ marginTop: 100, marginBottom: '20px' }}>This is what I found: </h3>
            <div className="border mb-3 rounded p-3">
                <p>
                    <strong>Mission Name:</strong> {mission_name}
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
                        <strong>Rocket ID:</strong> {rocket_id}
                    </p>
                    <p>
                        <strong>Rocket Name:</strong> {rocket_name}
                    </p>
                    <p>
                        <strong>Rocket Type:</strong> {rocket_type}
                    </p>
                </div>
            </div>
        </>
    );
}
