import Link from "next/link";
import React from "react";
import { BannerContent } from "../utils/BannerContent.utils";

interface Props {
    banners: BannerContent[]
}
interface State {

}

export default class BannerSidebar extends React.Component <Props, State> {

    constructor(props:Props){
        super(props);
    }  

    render : () => JSX.Element = () => {
        return <div>{this.props.banners.map((banner: BannerContent, key:number) => <div key={key}>
            <h3>{banner.cbannaName}</h3>
            <a href={banner.cbannaImgLink}>
            <img src={banner.cbannaImgSrc} alt="" width="100%"/>
            </a>
            </div>)}
    </div>
    }
}
