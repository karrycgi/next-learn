import Head from "next/head";
import CriminalsSidebar, { CriminalSidebarProps } from "./CriminalsSidebar.component";
import HeaderComponent from "./Header.component";


interface LayoutComponents{
    title: string,
    description: string,
    children: any,
    sidebarCriminals: CriminalSidebarProps
}

export default function LayoutComponent(components: LayoutComponents): JSX.Element{

    return <div>
        <Head>
        <title>{components.title}</title>
        </Head>
        <HeaderComponent/>
        <CriminalsSidebar notices={components.sidebarCriminals.notices}/>

        <div>
            {components.children}
        </div>
        
        
        </div>
}