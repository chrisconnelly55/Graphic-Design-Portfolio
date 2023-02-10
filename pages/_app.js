import "@styles/globals.css";
import Header from "@components/Header";
function Application({ Component, pageProps }) {
  return (
    <>
      <Header title="Connelly Designs" />
      <Component {...pageProps} />
    </>
  );
}

export default Application;
