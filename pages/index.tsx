import type { NextPage } from 'next'
import CriminalComponent from '../components/CriminalComponent.component';

const Home: NextPage = () => {
  return <div>
      <CriminalComponent firstname='Hans' lastname='Wurst'>
        ist ein ganz toller Typ
      </CriminalComponent>
      <CriminalComponent firstname='Susie' lastname='Sorglos'>
        ist ne ganz Nette.
      </CriminalComponent>

  </div>
}

export default Home;