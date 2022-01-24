import type { GetStaticProps, NextPage } from 'next'
import { searchRedNotice } from 'next-learn-red-notice-api';
import RedNotice, { RedNoticeResult } from 'next-learn-red-notice-api/build/lib/RedNotice.all';
import  { CriminalComponentInterface } from '../components/CriminalComponent.component';
import { CriminalSidebarProps } from '../components/CriminalsSidebar.component';
import LayoutComponent from '../components/Layout.component';
import styles from "../styles/Home.module.css"


const DEMO_DATA: CriminalComponentInterface[] = [{ firstname: "Hans", lastname: "Wurst", children: "ist ein ganz toller Typ." },
{ firstname: "Susi", lastname: "Sorglos", children: "ist eine ganz Nette." }, { firstname: "Susi1", lastname: "Sorglos1", children: "ist eine ganz Nette." }]

const DEMO_DATA_LIST: string[] = ["Hans", "Peter", "Paul", "Susi", "Gabi", "Maria"];

const Home: NextPage<CriminalSidebarProps> = (criminals: CriminalSidebarProps) => {
  return <div>
    <LayoutComponent title="Homepage" description='Homepage' sidebarCriminals={criminals}>
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
