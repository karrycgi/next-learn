import Link from "next/link";
import React from "react";
import BannerContent, { bannerContent, bannerContentI } from "../utils/BannerContent.utils";

interface Props {
    banners: bannerContent[]
}
interface State {

}

export default class BannerSidebar extends React.Component <Props, State> {

    constructor(props:Props){
        super(props);
        getArray();
    }  

    render : () => JSX.Element = () => {
        return <div>{this.props.banners.map((banner: bannerContent, key:number) => <div>
            <h3>{banner.bannaName}</h3>
            <img src={banner.bannaImgSrc} alt="" width="100%"/>
            </div>)}
            
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
