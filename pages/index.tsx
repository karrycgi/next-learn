import type { NextPage } from 'next'
import CriminalComponent, { CriminalComponentInterface } from '../components/CriminalComponent.component';

const DEMO_DATA:CriminalComponentInterface[]=[{firstname:"Hans", lastname:"Wurst", children:"ist ein ganz toller Typ."}, 
  {firstname:"Susi", lastname:"Sorglos", children:"ist eine ganz Nette."}, {firstname:"Susi1", lastname:"Sorglos1", children:"ist eine ganz Nette."}]
const Home: NextPage = () => {
  return <div>
    {DEMO_DATA.map((criminal:CriminalComponentInterface)=><CriminalComponent firstname={criminal.firstname} lastname={criminal.lastname}>{criminal.children}</CriminalComponent>)}
    <hr />
    {DEMO_DATA.map((criminal:CriminalComponentInterface)=><CriminalComponent {...criminal} />)}
  </div>
}

export default Home;