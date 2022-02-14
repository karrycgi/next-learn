import type { GetStaticProps, NextPage } from 'next'
import { searchRedNotice } from 'next-learn-red-notice-api';
import RedNotice, { RedNoticeResult } from 'next-learn-red-notice-api/build/lib/RedNotice.all';
import { CriminalSidebarProps } from '../components/CriminalsSidebar.component';
import LayoutComponent from '../components/Layout.component';
import getBannerContent from '../utils/BannerContent.utils';
import styles from "../styles/Home.module.css"
import Attributes from '../utils/Attributes.utils';
const Home: NextPage<CriminalSidebarProps> = (criminals: CriminalSidebarProps) => {
  const bannerLotsOf= getBannerContent()
  return <div>

    <LayoutComponent title="Homepage" description='Homepage' sidebarCriminals={criminals}  banners={bannerLotsOf}>
      <div className={styles.title}>
        Homepage Content
      </div>
    </LayoutComponent>
  </div>
}

<body>
  <article>
    <header>
      <h2>Die Kopfzeile des Abschnittes</h2>
      <p>Der Absatz des Textes.</p>
    </header>
  </article>
</body>

export const getStaticProps: GetStaticProps<CriminalSidebarProps> = async (context: any) => {
  try {

    const result: Attributes<RedNoticeResult> = new Attributes(await searchRedNotice()) 

    const criminals: RedNotice[] = result.get("_embedded").notices



    return {
      props: {
        notices: criminals
      }
    }

  } catch (e: any) {
    const dummyNotice: RedNotice = {
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
