import type { GetStaticProps, NextPage } from 'next'
import { searchRedNotice } from 'next-learn-red-notice-api';
import RedNotice, { RedNoticeResult } from 'next-learn-red-notice-api/build/lib/RedNotice.all';
import { CriminalSidebarProps } from '../components/CriminalsSidebar.component';
import LayoutComponent from '../components/Layout.component';
import BannerContent, { bannerContent, bannerContentI } from "../utils/BannerContent.utils";


const Home: NextPage<CriminalSidebarProps> = (criminals: CriminalSidebarProps, bannerLotsOf:bannerContent[]) => {
  return <div>
          <LayoutComponent title="Homepage" description='Homepage'
                  sidebarCriminals={criminals} banners={bannerLotsOf}>
          </LayoutComponent>
        </div>
}




export const getStaticProps: GetStaticProps<CriminalSidebarProps> = async (context: any) => {
  try {
    const result: RedNoticeResult = await searchRedNotice();
    const criminals: RedNotice[] = result._embedded.notices;  
    console.log(criminals)
    return {
      props: {
        notices: criminals
      }
    }

  } catch (e: any) {
    const dummyNotice : RedNotice = {
      forename: "",
      date_of_birth: "",
      entity_id: "",
      nationalities: [],
      name: "string",
      _links: {}
    }
    return {
      props: {
        notices: 
          [dummyNotice]
      }
    }
  }
}

export default Home;
