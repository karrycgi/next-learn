import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { RedNoticeDetails, detailsRedNotice, RedNoticeQuery, RedNoticeResult, searchRedNotice } from "next-learn-red-notice-api"
import RedNotice from "next-learn-red-notice-api/src/lib/RedNotice.all";
import { ParsedUrlQuery } from "querystring";

interface Criminal {
    forename: string,
    name: string,
    thumbnail: string,
    error?: string
}

interface Pageable extends ParsedUrlQuery {
    id: string;
}

const CriminalPage: NextPage<Criminal> = (criminal: Criminal) => {
    return <div>
        <div>
            {criminal.forename}
        </div>
        <div>
            {criminal.name}!567
        </div>
        {criminal.error?<div>{criminal.error}</div>:<></>}
    </div>
}


export default CriminalPage


export const getStaticPaths: GetStaticPaths<Pageable> = async () => {
    //fetch data from API
    const query: RedNoticeResult = await searchRedNotice()

    return {
        paths: query._embedded.notices.map((el) => {
            return {
                params: {
                    id: el.entity_id
                }

            }
        }),
        fallback: false
    }
}
export const getStaticProps: GetStaticProps<Criminal> = async (context: any) => {
    const { id } = context.params as Pageable
    try {
        const details: RedNoticeDetails = await detailsRedNotice(id)
        return {
            props: {
                forename: details.forename,
                name: details.name,
                thumbnail: details._links.thumbnail?.href || ""
            }
        }
    } catch (e: any) {
        return {
            props: {
                forename: "jon",
                name: "doe",
                thumbnail: "",
                error: e.message || undefined
            }
        }
    }
}