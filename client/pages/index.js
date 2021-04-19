import Head from "next/head";
import { useRouter } from "next/router";
import Particles from 'react-particles-js';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="d-flex flex-column">
        <Particles width={'100vw'} height={'96vh'}
          params={{
            "particles": {
              "color": "#1c5c4d",
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#000000",
                  blur: 1
                }
              },
              "number": {
                "value": 80
              },
              "size": {
                "value": 3
              }
            },

            "interactivity": {
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                }
              },
              "modes": {
                "bubble": {
                  "distance": 250,
                  "duration": 2,
                  "size": 0,
                  "opacity": 0
                },
                "repulse": {
                  "distance": 200,
                  "duration": 4
                }
              }
            }
          }} />
        <div
          className="d-flex align-items-center justify-content-center align-self-center"
          style={{
            position: "absolute",
            top: '30%',
            height: "40vh"
          }}
        >
          <div
            className="d-flex flex-column align-items-center justify-content-around"
            style={{ height: "40vh" }}
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
            <div className="d-flex w-50 justify-content-around flex-wrap">
              <button
                type="button"
                class="btn btn-primary mb-4"
                onClick={() => router.push("launch_generator")}
              >
                Launch Generator
            </button>
              <button type="button" class="btn btn-primary mb-4"
                onClick={() => router.push("launch_search")}
              >
                Launch Search
            </button>
            </div>
          </div>
        </div>
        <footer className='text-center' style={{ position: 'absolute', bottom: 40, width: '100%' }}>
          Developed by <a href="https://www.github.com/andytubeee">Andrew Yang</a> &copy; {new Date().getFullYear()}
        </footer>
      </div>
    </>
  );
}
