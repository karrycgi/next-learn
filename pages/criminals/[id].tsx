import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { RedNoticeDetails, detailsRedNotice, RedNoticeQuery, RedNoticeResult, searchRedNotice } from "next-learn-red-notice-api"
import { ParsedUrlQuery } from "querystring";
import LayoutComponent from '../../components/Layout.component';
import { CriminalSidebarProps } from '../../components/CriminalsSidebar.component';
import CriminalsSidebar from "../../components/CriminalsSidebar.component";
import RedNotice from "next-learn-red-notice-api/build/lib/RedNotice.all";

interface Criminal {
    forename: string,
    name: string,
    thumbnail: string,
    error?: string,
    sidebarcriminals: CriminalSidebarProps
}

interface Pageable extends ParsedUrlQuery {
    id: string;
}

const CriminalPage: NextPage<Criminal> = (criminal: Criminal) => {
    return <div>
       
        <LayoutComponent title="Homepage" description='Homepage' sidebarCriminals={criminal.sidebarcriminals}>
        <div>
        <h1>Criminal Name</h1>
            {criminal.forename}  {criminal.name}
        
        {criminal.error?<div>{criminal.error}</div>:<></>}
        </div>
    </LayoutComponent>
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
        const notices: RedNotice[] = await (await searchRedNotice())._embedded.notices
        const details: RedNoticeDetails = await detailsRedNotice(id)
        return {
            props: {
                forename: details.forename,
                name: details.name,
                thumbnail: details._links.thumbnail?.href || "", 
                sidebarcriminals: {
                    notices: notices
                }

            }
        }
    } 
    // catch (e: any) {
    //     return {
    //         props: {
    //             forename: "jon",
    //             name: "doe",
    //             thumbnail: "",
    //             error: e.message || undefined
    //         }
    //     }
    // }
