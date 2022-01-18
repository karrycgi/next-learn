import { GetStaticPaths, NextPage } from "next";
import { RedNoticeQuery, RedNoticeResult, searchRedNotice } from "next-learn-red-notice-api"
import RedNotice from "next-learn-red-notice-api/src/lib/RedNotice.all";
import { ParsedUrlQuery } from "querystring";
interface Criminal {

}

interface Pageable extends ParsedUrlQuery{
    id: string;
}

const CriminalPage: NextPage<Criminal> = (criminal: Criminal) => {
    return <div>

    </div>
}


export default CriminalPage


export const getStaticPaths: GetStaticPaths<Pageable> = async () => {
    //fetch data from API
    const query: RedNoticeResult = await searchRedNotice()

    return {
        paths:query._embedded.notices.map((el) => {
            return {
                params: {
                    id: el.entity_id
                }
    
            }
        }),
        fallback: false
    }



 

}
