import Link from "next/link";
import LOGO from "../public/headerImage.png";
import Image from "next/image";
import styles from "../styles/Header.module.css"

const HeaderComponent = (): JSX.Element => {
    return <div>
            <ul className={styles.ul}>
                <li> <Link href="/"><a className={styles.a}>Home</a></Link> </li>
                <li> <Link href="/criminals/search"><a className={styles.a}>Search</a></Link> </li>
            </ul>

        <p><Image alt="TODO" src={LOGO} width={1920}></Image>

            <h1>
                Willkommen auf unserer Verbrecherseite
            </h1>
        </p>
        <hr/>
    </div>
}

export default HeaderComponent;




