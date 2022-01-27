import React from "react";
import BannerContent, { bannerContent, bannerContentI } from "../utils/BannerContent.utils";


export interface BannerSidebarProps {
    banners: bannerContent[]
}

export default class BannerSidebar extends React.Component {

    constructor(props:BannerSidebarProps){
        super(props);
        getArray();
    }  

    render : () => JSX.Element = () => {
        return <div>
           
    </div>
    }
}

const getArray = () : string => {
    var bannerArray: Array<bannerContent>;
    for(let oneBanContent in BannerContent) {
        console.log(oneBanContent);
        <h4>{oneBanContent}</h4>
    }
    return " ";
}
// <h4>{BannerContent.map((content:bannerContent, key:number) => {content.bannaName})}</h4>
// <nav className={styles.nav}>{this.props.notices.map((notice: RedNotice, key:number) => 
// <Link href={`/criminals/${encodeURIComponent(notice.entity_id)}`} key="key">
// <a>{`${notice.forename} ${notice.name}`}</a></Link>)}
// </nav>
