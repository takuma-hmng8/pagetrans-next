import Head from "next/head";
import PageTitle from "../../components/element/Pagetitle";

export default function About() {
   console.log("アバウトページで実行したい関数");
   return (
      <>
         <Head>
            <title>アバウトページ</title>
         </Head>
         <PageTitle title="あばうと" />
      </>
   );
}
