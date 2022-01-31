import Head from "next/head";
import CriminalsSidebar, { CriminalSidebarProps } from "./CriminalsSidebar.component";
import HeaderComponent from "./Header.component";
import styles from "../styles/Home.module.css";
import BannerSidebar from "./BannerSidebar.component";
import { BannerContent } from "../utils/BannerContent.utils";


interface LayoutComponents{
    title: string,
    description: string,
    children: any,

    sidebarCriminals?: CriminalSidebarProps
    banners?: Array<BannerContent>

}


export default function LayoutComponent (components: LayoutComponents): JSX.Element{


    return <div>
        <Head>
            <title>{components.title}</title>
        </Head>

        <HeaderComponent/>

        <section className={styles.sectionLeft}> 
            {components.sidebarCriminals && <CriminalsSidebar notices={components.sidebarCriminals.notices}/>}
        </section>


        <section className={styles.sectionMiddle}> 
            <div>
                {/* ROUTER??? Wenn pfad = localhost:3000/criminals/search 
                    Dann p nicht anzeigen*/}
                <p>Have you seen this gangster? Call 900 + 11</p>
                {components.children}
            </div>
        </section>
        
        {components.banners && <section className={styles.sectionRight}>
            <BannerSidebar banners={components.banners}/>
        </section>}
        
      
        </div>
}

