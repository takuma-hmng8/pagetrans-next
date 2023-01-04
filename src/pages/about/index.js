import Head from "next/head";
import PageTitle from "../../components/element/Pagetitle";
import { useAfterEnter } from "../../hooks/useAfterEnter";

export default function About() {
   useAfterEnter(() => {
      console.log("アバウトページのアニメーション");
   });

   return (
      <>
         <Head>
            <title>アバウトページ</title>
         </Head>
         <PageTitle title="あばうと" />
      </>
   );
}
