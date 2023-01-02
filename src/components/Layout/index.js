import { SwitchTransition, Transition } from "react-transition-group";
import gsap from "gsap";
import { useRouter } from "next/router";
import Header from "../common/Header";
import Footer from "../common/Footer";
import style from "../../styles/Home.module.css";

//ページ遷移の秒数
const exitDur = 500;
const enterDur = 1000;

export const pageTransBool = () => {
   return new Promise((resolve) => {
      setTimeout(() => {
         console.log("ページ遷移のアニメーションが完了");
         resolve();
      }, exitDur + enterDur);
   });
};

export default function Pagetransition({ children }) {
   const router = useRouter();

   const onPageEnter = (element) => {
      window.scrollTo({ top: 0 });
      gsap.fromTo(
         element,
         {
            y: 50,
            autoAlpha: 0,
            ease: "power3.out",
         },
         {
            y: 0,
            autoAlpha: 1,
            duration: enterDur / 1000,
            ease: "power3.out",
         }
      );
   };

   const onPageExit = (element) => {
      gsap.fromTo(
         element,
         {
            y: 0,
            autoAlpha: 1,
            ease: "power3.out",
         },
         {
            y: -50,
            autoAlpha: 0,
            duration: exitDur / 1000,
            ease: "power3.inOut",
         }
      );
   };

   return (
      <>
         <Header />
         <SwitchTransition>
            <Transition
               key={router.pathname}
               timeout={exitDur}
               in={true}
               onEnter={onPageEnter}
               // onEntered={() => {
               //    console.log("ページ遷移できたよ");
               // }}
               onExit={onPageExit}
               mountOnEnter={true}
               unmountOnExit={true}>
               <div className={style.wrapper}>
                  <main className={style.main}>{children}</main>
               </div>
            </Transition>
         </SwitchTransition>
         <Footer />
      </>
   );
}
