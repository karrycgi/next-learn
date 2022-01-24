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
        <p><Image src={LOGO} className={styles.headerImage}></Image>
            <h1>
                Willkommen in unserer Verbrecherseite
            </h1>
        </p>
        <hr />
    </div>
}

export default HeaderComponent;




