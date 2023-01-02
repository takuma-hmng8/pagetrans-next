import { useEffect } from "react";

import "../styles/globals.css";
import "the-new-css-reset/css/reset.css";
import Pagetransition, { pageTransBool } from "../components/Layout";

export default function App({ Component, pageProps, router }) {
   useEffect(() => {
      (async () => {
         await pageTransBool();
         console.log(`${router.pathname}ページへの遷移が完了したよ`);
      })();
   }, [router.pathname]);

   return (
      <>
         <Pagetransition>
            <Component {...pageProps} />
         </Pagetransition>
      </>
   );
}
