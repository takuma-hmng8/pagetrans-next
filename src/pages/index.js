import Head from "next/head";
import PageTitle from "../components/element/Pagetitle";
import { css } from "@emotion/css";

const stringStyle = css`
   height: 400px;
   display: flex;
   align-items: center;
   background-color: red;
   text-align: center;
   justify-content: center;
`;

export default function Home() {
   return (
      <>
         <Head>
            <title>トップページ</title>
         </Head>
         <PageTitle title="とっぷ" />
         <div className={stringStyle}>トップページにだけ表示</div>
      </>
   );
}
