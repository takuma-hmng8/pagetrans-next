import style from "./header.module.css";
import Link from "next/link";

export default function () {
   return (
      <>
         <header className={style.header}>
            <nav>
               <ul>
                  <li>
                     <Link href="/" scroll={false}>
                        トップ
                     </Link>
                  </li>
                  <li>
                     <Link href="/about" scroll={false}>
                        あばうと
                     </Link>
                  </li>
               </ul>
            </nav>
         </header>
      </>
   );
}
