import Link from "next/link";
import LOGO from "../public/headerImage.png";
import Image from "next/image";

const HeaderComponent = (): JSX.Element => {
    return <div>
        <nav>
            <ul>
                <li> <Link href="/"><a>Home</a></Link> </li>
            </ul>
        </nav>
        <p><Image alt="TODO" src={LOGO} width={1920}></Image>
            <h1>
                Willkommen in unserer Verbrecherseite
            </h1>
        </p>
        <hr />
    </div>
}

export default HeaderComponent;




