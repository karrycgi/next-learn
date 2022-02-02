import { NextPage } from "next"
import { RedNoticeQuery, searchRedNotice } from "next-learn-red-notice-api/build/lib/RedNotice.all"
import RequestQuery from "../../components/dynamic/RequestQuery.component"
import LayoutComponent from "../../components/Layout.component"
import RedNoticeClass from "../../utils/RedNotice.class"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { Url } from "url"


let redNotice = new RedNoticeClass()

const CriminalSearchPage: NextPage = () => {
    const router = useRouter()

    const onSub: (query: RedNoticeQuery) => void = async (query: RedNoticeQuery) => {
        const q = await refactorQuery(query)
        router.push("/criminals" + q)
    }


    const refactorQuery: (fullQuery: RedNoticeQuery) => Promise<String> = async (fullQuery: RedNoticeQuery) => {
        let cleansedQuery = ""
        let index = 0;
        for (const [key, value] of Object.entries(fullQuery)) {
            if (value) {
                if (value && index === 0) {
                    cleansedQuery = cleansedQuery + "?" + key.toString() + "=" + value
                    index++
                } else {
                    cleansedQuery = cleansedQuery + "&" + key.toString() + "=" + value
                }
            }
        }
        return cleansedQuery
    }

    return <div>


        <LayoutComponent title="Search" description="Search Form for querying particular criminals"  >
            <RequestQuery onSub={onSub}></RequestQuery>
        </LayoutComponent>
    </div>
}

export default CriminalSearchPage




