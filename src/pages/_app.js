import { useEffect } from "react";

import "../styles/globals.css";
import "the-new-css-reset/css/reset.css";
import Pagetransition from "../components/Layout";

export default function App({ Component, pageProps, router }) {
   useEffect(() => {
      console.log(`${router.pathname}ページがよばれたよ`);
   }, [router.pathname]);

   return (
      <>
         <Pagetransition>
            <Component {...pageProps} />
         </Pagetransition>
      </>
   );
}
