import type { NextPage } from 'next'
import CriminalComponent, { CriminalComponentInterface } from '../components/CriminalComponent.component';
import NumPicker from '../components/input/NumPicker.component';
import SearchableList from '../components/input/SearchableList.component';

const DEMO_DATA:CriminalComponentInterface[]=[{firstname:"Hans", lastname:"Wurst", children:"ist ein ganz toller Typ."}, 
  {firstname:"Susi", lastname:"Sorglos", children:"ist eine ganz Nette."}, {firstname:"Susi1", lastname:"Sorglos1", children:"ist eine ganz Nette."}]

const DEMO_DATA_LIST: string[] = ["Hans", "Peter", "Paul", "Susi", "Gabi", "Maria"];

const Home: NextPage = () => {
  return <div>
      <SearchableList elements={DEMO_DATA_LIST}/>
    <hr />
    <div>
      <NumPicker onChange={(num:number)=>console.log(`NumPicker 1: ${num}`)}/>
    </div>
    <div>
      <NumPicker stepSize={5} onChange={(num:number)=>console.log(`NumPicker 2: ${num}`)}/>
    </div>
    <hr />
    {DEMO_DATA.map((criminal:CriminalComponentInterface)=><CriminalComponent key={criminal.firstname} firstname={criminal.firstname} lastname={criminal.lastname}>{criminal.children}</CriminalComponent>)}
    <hr />
    {DEMO_DATA.map((criminal:CriminalComponentInterface)=><CriminalComponent key={criminal.firstname}  {...criminal} />)}
  </div>
}

export default Home;