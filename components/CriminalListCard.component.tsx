import { RedNoticeDetails } from "next-learn-red-notice-api/build/lib/RedNotice.all";
import Image from "next/image";
import styles from "../styles/CriminalCard.module.css"




const CriminalListCard: (criminal: RedNoticeDetails) => JSX.Element = (criminal) => {



    return <div>

        <div className={styles.row}>
            <div className={styles.card}>
                <div className={styles.column} >
                    {criminal._links.thumbnail?.href && <Image alt="TODO" src={criminal._links.thumbnail?.href} width={150} height={150} />}
                </div>
                <div className={styles.column}>
                <div className={styles.text}>
                        <article >
                            <p>{criminal.forename + " " + criminal.name }</p>
                            <p>{criminal.date_of_birth}</p>
                            <p>{criminal.nationalities.map((n,key) => <>{`${key+1}. Nationalität: ${n}`}<br/></>)}</p>
                        </article>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.text}>
                        <article >
                            {criminal.arrest_warrants.map(inc => <>{inc.charge}</>)}
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default CriminalListCard