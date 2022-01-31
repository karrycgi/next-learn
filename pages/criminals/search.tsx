import {  NextPage } from "next"
import { RedNoticeQuery } from "next-learn-red-notice-api/build/lib/RedNotice.all"
import RequestQuery from "../../components/dynamic/RequestQuery.component"
import LayoutComponent from "../../components/Layout.component"


const CriminalSearchPage : NextPage = () => {
    const onSub : (query: RedNoticeQuery) =>  void = async (query: RedNoticeQuery) => {
        //TO DO:
        //  do whatever request you want with query
        // console.log(query)
    }
    
    const query :RedNoticeQuery =  {
        forename: "string",
        name: "string",
        nationality: "string",
        ageMax: 1,
        ageMin: 2,
        sexId: "F",
        arrestWarrantCountryId: "string",
        page: 1,
        resultPerPage: 2,
    }
    
    return <div>

        
        <LayoutComponent title="Search" description="Search Form for querying particular criminals"  >
            <RequestQuery onSub={onSub}></RequestQuery>       
        </LayoutComponent>        
    </div>
}

export default CriminalSearchPage


