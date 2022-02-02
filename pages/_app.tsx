import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import "../sass/styles.scss";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <style>
        {`
        body {
          padding: 0;
          margin: 0;
          background: #f9fbf8;
        }

        * {
          box-sizing: border-box;
          font-family: Helvetica, sans-serif;
          font-weight: 900;
          color: #222;
        }
      `}
      </style>
    </>
  );
}

export default MyApp;
