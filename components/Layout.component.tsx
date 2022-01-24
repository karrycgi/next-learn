import Head from "next/head";
import CriminalsSidebar, { CriminalSidebarProps } from "./CriminalsSidebar.component";
import HeaderComponent from "./Header.component";
import BannerComponent from "./BannerComponent.component";
import styles from "../styles/Home.module.css";


interface LayoutComponents{
    title: string,
    description: string,
    children: any,
    sidebarCriminals: CriminalSidebarProps
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
            <BannerComponent/>
        </section>
      
        
        
        </div>
}