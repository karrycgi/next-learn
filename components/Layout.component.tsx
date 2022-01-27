import Head from "next/head";
import CriminalsSidebar, { CriminalSidebarProps } from "./CriminalsSidebar.component";
import HeaderComponent from "./Header.component";
import BannerContent, { bannerContent, bannerContentI } from "../utils/BannerContent.utils";
import styles from "../styles/Home.module.css";
import BannerSidebar, {BannerSidebarProps} from "./BannerSidebar.component";


interface LayoutComponents{
    title: string,
    description: string,
    children: any,
    sidebarCriminals: CriminalSidebarProps,
    banners: Array<bannerContent>
}

export default function LayoutComponent (components: LayoutComponents): JSX.Element{

    return <div>
        <Head>
            <title>{components.title}</title>
        </Head>

        <HeaderComponent/>
        <section className={styles.sectionLeft}> 
            <CriminalsSidebar notices={components.sidebarCriminals.notices}/>
        </section>

        <section className={styles.sectionMiddle}> 
            <div>
                <p>Have you seen this gangster? Call 900 + 11</p>
                {components.children}
            </div>
        </section>
        
        <section className={styles.sectionRight}>
            <BannerSidebar />
        </section>
      
        </div>
}

