export class BannerContent {

    constructor (
        
        public cbannaName: string,
        public cbannaImgSrc: string
    ) {
    }
}

const banner01: BannerContent = new BannerContent(

    "best amplifiers",
    "http://luxman.com/images/common/logo.png"
    
    //"<img src={'http://luxman.com/images/common/logo.png'} className={styles.bannerImage} />"
);

const banner02: BannerContent = new BannerContent(
    
    "best ANC headphones ever",
    "https://www.sony.com/is/image/gwtprod/5d02da5df552836db894cead8a68f5f3?fmt=png-alpha&wid=515&hei=515&trf=trim"
    
);
        
const banner03: BannerContent = new BannerContent(
    "best sound in town",
    "https://www.visaton.de/sites/default/files/styles/medium/public/2017-11/classic200.jpg?itok=o6ZB2jd6"
 
);       

export function getAllBannaContent() {
    const contentArr: Array<BannerContent> = [banner01, banner02,banner03];
    return contentArr;
}

const getBannerContent :() => BannerContent[]= () => {
    return getAllBannaContent();
}

export default getBannerContent;