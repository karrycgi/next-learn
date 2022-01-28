


export interface bannerContentI {
    bannaName: string;
    bannaImgSrc: string;
}

export class bannerContent {
        
    bannaName: string;
    bannaImgSrc: string;

    constructor (
        
        cbannaName: string,
        cbannaImgSrc: string
    ) {
        
        this.bannaName = cbannaName;
        this.bannaImgSrc = cbannaImgSrc;
    }
}

const banner01: bannerContentI = new bannerContent(

    "best amplifiers",
    "http://luxman.com/images/common/logo.png"
    
    //"<img src={'http://luxman.com/images/common/logo.png'} className={styles.bannerImage} />"
);

const banner02: bannerContentI = new bannerContent(
    
    "best ANC headphones ever",
    "https://www.sony.com/is/image/gwtprod/5d02da5df552836db894cead8a68f5f3?fmt=png-alpha&wid=515&hei=515&trf=trim"
    
);
        
const banner03: bannerContentI = new bannerContent(
    "best sound in town",
    "https://www.visaton.de/sites/default/files/styles/medium/public/2017-11/classic200.jpg?itok=o6ZB2jd6"
 
);       

export function getAllBannaContent() {
    const contentArr: Array<bannerContent> = [banner01, banner02,banner03];
    return contentArr;
}

const getBannerContent :() => bannerContent[]= () => {
    return getAllBannaContent();
}

export default getBannerContent;