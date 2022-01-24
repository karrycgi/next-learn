import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";

const BannerComponent = () : JSX.Element => {
    return <div>
        <p>
            <h4> best amplifiers</h4>
            <img src={'http://luxman.com/images/common/logo.png'}
            className={styles.bannerImage} />

        <h4> best ANC headphones ever</h4>
            <img src={'https://www.sony.com/is/image/gwtprod/5d02da5df552836db894cead8a68f5f3?fmt=png-alpha&wid=515&hei=515&trf=trim'}
            className={styles.bannerImage} />
        

        <h4> best sound in town</h4>
            <img src={'https://www.visaton.de/sites/default/files/styles/medium/public/2017-11/classic200.jpg?itok=o6ZB2jd6'}
            className={styles.bannerImage} />
        </p>
        
    </div>
}

export default BannerComponent;


