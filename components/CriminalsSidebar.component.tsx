import RedNotice from "next-learn-red-notice-api/build/lib/RedNotice.all";
import Link from "next/link";
import React from "react";
import styles from "../styles/sidebar.module.css"

export interface CriminalSidebarProps {
    notices: RedNotice[]
}

export default class CriminalsSidebar extends React.Component<CriminalSidebarProps> {

    constructor(props:CriminalSidebarProps){
        super(props)
    }  

    render : () => JSX.Element = () => {
        return <div>        
        <nav className={styles.nav}>{this.props.notices.map((notice: RedNotice, key:number) => <Link href={`/criminals/${encodeURIComponent(notice.entity_id)}`} key={key}><a>{`${notice.forename} ${notice.name}`}</a></Link>)}</nav>
    </div>
    }
}

