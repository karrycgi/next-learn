import { GetServerSideProps, NextPage } from "next";
import { detailsRedNotice, RedNoticeDetails,  RedNoticeQuery, RedNoticeResult, searchRedNotice } from "next-learn-red-notice-api";
import CriminalListCard from "../../components/CriminalListCard.component";
import { CriminalSidebarProps } from "../../components/CriminalsSidebar.component";
import LayoutComponent from "../../components/Layout.component";
import getBannerContent from "../../utils/BannerContent.utils";
import styles from "../../styles/CriminalCard.module.css"
import RedNotice from "next-learn-red-notice-api/build/lib/RedNotice.all";
import Pagination from "../../components/Pagination.component";


interface ExtendedRedNotice extends RedNotice   {
    details: RedNoticeDetails
}

interface NextPageProps  {
    noticesForSidebar: CriminalSidebarProps,
    extendedRedNotices : ExtendedRedNotice[],
    query: RedNoticeQuery,
    maxPages: number
}


const CriminalsPage: NextPage<NextPageProps> = (criminals: NextPageProps) => {
    
    return <div>        
        <LayoutComponent title="Criminals" description="Page of criminals" banners={getBannerContent()} sidebarCriminals={criminals.noticesForSidebar}>
            EWQGWQE {criminals.maxPages}
            <div className={styles.row}>
                <div className={styles.cardHead}>
                    <div className={styles.columnHead} >
                        <h3>Profilbild</h3>
                    </div>
                    <div className={styles.columnHead}>
                        <span>
                            <h3>Person</h3>
                        </span>
                    </div>
                    <div className={styles.columnHead}>
                        <span>
                            <h3>Verbrechen</h3>
                        </span>
                    </div>
                </div>
            </div>
            {criminals.extendedRedNotices.map(el => <CriminalListCard {...el.details} key={el.details.entity_id}></CriminalListCard>)}
            
            
            <Pagination query={criminals.query} pageMax={criminals.maxPages}></Pagination>        
        </LayoutComponent>
    </div>
}

export default CriminalsPage

export const getServerSideProps: GetServerSideProps<NextPageProps> = async (context: any) => {
    
    const query : RedNoticeQuery = context.query
    const result: RedNoticeResult = await searchRedNotice(query)
    console.log(result)
    let notices: CriminalSidebarProps = await (await searchRedNotice())._embedded
    
    const returnValue : ExtendedRedNotice[]  = await Promise.all(result._embedded.notices.map(async notice => {
        return {
            ...notice,
            details: await detailsRedNotice(encodeURIComponent(notice.entity_id))
        }
    })
    )
    const noOfPages = Math.ceil(result.total / query.resultPerPage)
    return {
        props: {
            extendedRedNotices : returnValue,
            noticesForSidebar: notices,
            query: query,
            maxPages: noOfPages
        }
    }

}
