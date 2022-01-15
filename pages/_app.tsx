import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-dark-light">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
