import styles from "../../styles/Home.module.css";
import { css } from "@emotion/css";

const stringStyle = css`
   height: 1000px;
   display: flex;
   align-items: center;
   background-color: lightblue;
   text-align: center;
   justify-content: center;
`;

export default function PageTitle({ title }) {
   return (
      <>
         <div className={stringStyle}>
            <h1 className={styles.title}>{title}ページ</h1>
         </div>
      </>
   );
}
