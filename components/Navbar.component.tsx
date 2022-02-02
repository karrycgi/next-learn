import Link from "next/link";
import styles from "../styles/Header.module.css";

const NavbarComponent = (): JSX.Element => {
    return <div>
        <nav>
            <ul className={styles.ul}>
                <li> <Link href="/"><a className={styles.a}>Home</a></Link> </li>
                <li> <Link href="/criminals/search"><a className={styles.a}>Search</a></Link> </li>
            </ul>
        </nav>
    </div>
}

export default NavbarComponent;




