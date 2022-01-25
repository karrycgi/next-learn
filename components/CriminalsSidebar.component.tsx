import RedNotice from "next-learn-red-notice-api/build/lib/RedNotice.all";
import Link from "next/link";
import React from "react";
import styles from "../styles/sidebar.module.css"

export interface CriminalSidebarProps {
    notices: RedNotice[]
}

export interface CriminalSidebarState {
    notices: RedNotice[]
    query: string
}

export default class CriminalsSidebar extends React.Component<CriminalSidebarProps, CriminalSidebarState> {

    constructor(props:CriminalSidebarProps){
        super(props)
        this.state={
            notices:props.notices,
            query:""
        }
        this.onquery=this.onquery.bind(this)
    }
    onquery(event:any):void{
        this.setState({
            ...this.state,
            query:event.target.value,
            notices: this.props.notices.filter((notice:RedNotice)=> notice.name.includes(this.state.query.toUpperCase()) || notice.forename.includes(this.state.query.toUpperCase())),
            
        })
    }
    componentDidUpdate(prevProps:CriminalSidebarProps,prevState: CriminalSidebarState){
        if(prevState.query !== this.state.query)
        this.setState({
            ...this.state,
            notices: this.props.notices.filter((notice:RedNotice)=> notice.name.includes(this.state.query.toUpperCase()) || notice.forename.includes(this.state.query.toUpperCase()))
        })
    }

    render : () => JSX.Element = () => {
        return <div>
            <input value={this.state.query} onChange={this.onquery} />
        <nav className={styles.nav}>{this.state.notices.map((notice: RedNotice, key:number) => <Link href={`/criminals/${encodeURIComponent(notice.entity_id)}`} key="key"><a>{`${notice.forename} ${notice.name}`}</a></Link>)}</nav>
    </div>
    }
}

