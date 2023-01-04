import { SwitchTransition, Transition } from "react-transition-group";
import gsap from "gsap";
import { useRouter } from "next/router";
import Header from "../common/Header";
import Footer from "../common/Footer";
import style from "../../styles/Home.module.css";

/*===============================================
ページ遷移の設定
===============================================*/
//ページ遷移の秒数
const EXITDUR = 1000;
const ENTERDUR = 1000;

//遷移後アニメーションの終了を待たせるpromise
export const afterEnter = () => {
   return new Promise((resolve) => {
      setTimeout(() => {
         console.log("遷移後アニメーションの終了");
         resolve();
      }, ENTERDUR);
   });
};

/*===============================================
ページ遷移アニメーション
===============================================*/
export default function Pagetransition({ children }) {
   const router = useRouter();

   /********************
	遷移前アニメーション
	********************/
   const pageLeaveAnim = (element) => {
      gsap.fromTo(
         element,
         {
            y: 0,
            autoAlpha: 1,
         },
         {
            y: -40,
            autoAlpha: 0,
            duration: EXITDUR / 1000,
            ease: "power3.in",
         }
      );
   };

   /********************
	遷移後アニメーション
	********************/
   const pageEnterAnim = (element) => {
      //ページトップに戻す
      window.scrollTo({ top: 0 });
      //タイムライン
      gsap.fromTo(
         element,
         {
            y: 40,
            autoAlpha: 0,
         },
         {
            y: 0,
            autoAlpha: 1,
            duration: ENTERDUR / 1000,
            ease: "power3.out",
         }
      );
   };

   return (
      <>
         <Header />
         <SwitchTransition mode="out-in">
            <Transition
               key={router.pathname}
               timeout={EXITDUR} //timeoutだけ次のコンポーネントのマウントを待機する
               in={true}
               onEnter={pageEnterAnim}
               onExit={pageLeaveAnim}
               mountOnEnter={true} //マウントを遅延させる
               unmountOnExit={true} //終了後にコンポーネントをアンマウントさせる
            >
               <div className={style.wrapper}>
                  <main className={style.main}>{children}</main>
               </div>
            </Transition>
         </SwitchTransition>
         <Footer />
      </>
   );
}
