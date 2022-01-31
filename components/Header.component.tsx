import Link from "next/link";
import LOGO from "../public/headerImage.png";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const HeaderComponent = (): JSX.Element => {
    return <div>
        <nav>
            <ul>
                <li> <Link href="/"><a>Home</a></Link> </li>
            </ul>
        </nav>
        <Image src={LOGO} className={styles.headerImage}></Image>
               <h3> Willkommen auf unserer Verbrecherseite</h3>
        <hr />
    </div>
}

export default HeaderComponent;




