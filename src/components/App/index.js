// == Import
// npm

// local

// style

import './app.scss';

// data

import characters from 'src/data/characters';
// import picturesList from './pictures';

// composant
import Header from '../Header/header';
import Filter from '../Filter/filter';
import Current from '../Current/current';
import Characters from '../Characters/characters';

// == Composant
function App() {
  // console.log(characters);
  return (
    <div className="app">
      <Header />
      <Filter />
      <Current />
      <Characters charactersList={characters} />
    </div>
  );
}

// == Export
export default App;
