import { SwitchTransition, Transition } from "react-transition-group";
import gsap from "gsap";
import { useRouter } from "next/router";
import Header from "../common/Header";
import Footer from "../common/Footer";
import style from "../../styles/Home.module.css";

export const pageTransBool = () => {
   console.log("ページ遷移できたよ");
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
            duration: 1,
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
            duration: 0.5,
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
               timeout={500}
               in={true}
               onEnter={onPageEnter}
               onEntered={pageTransBool}
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
