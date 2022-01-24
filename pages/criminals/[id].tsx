import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { RedNoticeDetails, detailsRedNotice, RedNoticeQuery, RedNoticeResult, searchRedNotice } from "next-learn-red-notice-api"
import { ParsedUrlQuery } from "querystring";
import LayoutComponent from '../../components/Layout.component';
import { CriminalSidebarProps } from '../../components/CriminalsSidebar.component';
import CriminalsSidebar from "../../components/CriminalsSidebar.component";
import RedNotice from "next-learn-red-notice-api/build/lib/RedNotice.all";
import CriminalComponent from "../../components/CriminalComponent.component";

interface Criminal extends RedNoticeDetails {
    error?: string,
    sidebarcriminals: CriminalSidebarProps
}

interface Pageable extends ParsedUrlQuery {
    id: string;
}

const CriminalPage: NextPage<Criminal> = (criminal: Criminal) => {
    return <div>
        <LayoutComponent title="Homepage" description='Homepage' sidebarCriminals={criminal.sidebarcriminals}>
            <CriminalComponent {...criminal}/>
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
            ...details,
            sidebarcriminals: {
                notices: notices
            }
        }
    }
}

