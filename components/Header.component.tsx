import Link from "next/link";
import LOGO from "../public/headerImage.png";
import Image from "next/image";
import styles from "../styles/Header.module.css"
import NavbarComponent from "./Navbar.component";




const HeaderComponent = (): JSX.Element => {
    return <div>
            <NavbarComponent></NavbarComponent>


        <p><Image alt="TODO" src={LOGO} width={1920}></Image>

            <h1>
                Willkommen auf unserer Verbrecherseite
            </h1>
        </p>
        <hr/>
    </div>
}

export default HeaderComponent;




