// == Import
// npm

// local

// style

import './app.scss';

// data

import charactersList from 'src/data/characters';
// import picturesList from './pictures';

// composant
import Header from '../Header/header';
import Current from '../Current/current';
import Filter from '../Filter/filter';
import Characters from '../Characters/characters';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Filter />
      <Current />
      <Characters />
    </div>
  );
}

// == Export
export default App;
