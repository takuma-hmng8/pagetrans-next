import { useEffect } from "react";
import { afterEnter } from "../components/PageTransition/Layout";

import { isFirstRendering } from "../pages/_app";

const useAfterEnter = async (func) => {
   useEffect(() => {
      /********************
		初回レンダリング
		********************/
      if (isFirstRendering) {
         console.log("初回はすぐに発火");
         func();
         return;
      }
      /********************
		2回目以降
		********************/
      (async () => {
         await afterEnter();
         console.log("2回目以降はenterアニメーションを待つ");
         func();
      })();
   });
};

export { useAfterEnter };
