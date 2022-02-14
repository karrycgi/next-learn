import { NextPage } from "next"
import { RedNoticeQuery } from "next-learn-red-notice-api/build/lib/RedNotice.all"
import RequestQuery from "../../components/dynamic/RequestQuery.component"
import LayoutComponent from "../../components/Layout.component"
import { useRouter } from "next/router"




const CriminalSearchPage: NextPage = () => {
    const router = useRouter()

    const onSub: (query: RedNoticeQuery) => void = async (query: RedNoticeQuery) => {
        const q = refactorQuery(query)
        router.push("/criminals" + q)
    }



    return <div>
        <LayoutComponent title="Search" description="Search Form for querying particular criminals"  >
            <RequestQuery onSub={onSub}></RequestQuery>
        </LayoutComponent>
    </div>
}

export default CriminalSearchPage

//serialize Object to String
export const refactorQuery: (fullQuery: RedNoticeQuery) => string = (fullQuery: RedNoticeQuery) => {
    let cleansedQuery = ""
    let index = 0;
    for (const [key, value] of Object.entries(fullQuery)) {
        if (value) {
            if (index === 0) {
                cleansedQuery = cleansedQuery + "?" + key.toString() + "=" + value
                index++
            } else {
                cleansedQuery = cleansedQuery + "&" + key.toString() + "=" + value
            }
        }
    }
    return cleansedQuery
}




