import Head from "next/head";
import "../styles/global.css";
import "../styles/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NASA Space App</title>
        <link rel="icon"
          href="https://logos-world.net/wp-content/uploads/2020/09/SpaceX-Emblem.png" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />
    </>
  )

}

export default MyApp;
