import { GetStaticProps, NextPage } from "next"
import { RedNoticeDetails } from "next-learn-red-notice-api"
import RedNotice, { searchRedNotice } from "next-learn-red-notice-api/build/lib/RedNotice.all"
import { CriminalSidebarProps } from "../../components/CriminalsSidebar.component"
import UserInput from "../../components/input/UserInput.component"
import LayoutComponent from "../../components/Layout.component"


const CriminalSearchPage : NextPage = () => {
    return <div>
        <LayoutComponent title="Search" description="Search Form for querying particular criminals" >
                <UserInput/>
        </LayoutComponent>        
    </div>
}

export default CriminalSearchPage


