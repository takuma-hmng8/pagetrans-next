import "../styles/globals.css";
import "the-new-css-reset/css/reset.css";
import Layout from "../components/PageTransition/Layout";
import { useEffect, useRef } from "react";

//初回レンダリングかどうかの判定
export let isFirstRendering = true;

export default function App({ Component, pageProps }) {
   const ref = useRef(true);
   useEffect(() => {
      if (ref.current === true) {
         /********************
			初回の処理
			********************/
         ref.current = false;
         return;
      } else {
         /********************
			2回目以降の処理
			********************/
         isFirstRendering = false;
      }
   });

   return (
      <>
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </>
   );
}
