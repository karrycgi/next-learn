import Head from "next/head";
import CriminalsSidebar, { CriminalSidebarProps } from "./CriminalsSidebar.component";


interface LayoutComponents{
    title: string,
    description: string,
    children: any,
    sidebarCriminals: CriminalSidebarProps
}

export default function(components: LayoutComponents): JSX.Element{

    return <div>
        <Head>
        <title>{components.title}</title>
        </Head>
        <CriminalsSidebar notices={components.sidebarCriminals.notices}/>

        <div>
            {components.children}
        </div>
        
        
        </div>
}