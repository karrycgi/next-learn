import Link from "next/link";
import logo from "./styles/headerImage.png";

const HeaderComponent = (): JSX.Element => {
    return <div>

            <nav>
                <ul>
                    <li> <Link href="/"><a>Home</a></Link> </li>
                </ul>
            </nav>
            <p><img src='headerImage.png' width="900"/>
            <h1>
                Willkommen in unserer Verbrecherseite
            </h1>
            </p>
            <hr/>


    </div>
}

export default HeaderComponent;




