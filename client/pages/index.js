import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div
          className="d-flex flex-column align-items-center justify-content-around"
          style={{ height: "50vh" }}
        >
          <img
            src="/assets/images/SpaceXLogoFull.png"
            alt="SpaceX Logo"
            className="img-fluid d-block"
            onClick={() => {
              window.open("https://www.spacex.com/", "_ blank");
            }}
            style={{ width: 700, cursor: "pointer" }}
          />
          <div className="d-flex w-50 justify-content-around">
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => router.push("launch_generator")}
            >
              Launch Generator
            </button>
            <button type="button" class="btn btn-primary">
              Launch Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
