// == Import
// npm
import React from 'react';
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
class App extends React.Component {
  // console.log(characters);

  constructor(props) {
    super(props);

    this.state = {
      title: 'Sonic',
      descrip: 'Sonic est un hérisson supersonique le plus rapide du monde. Toujours en vadrouille, il va où le vent l\'emporte et vit sa vie selon ses propres règles plutôt que celles de ceux qui l\'entourent. Il est plutôt facile à vivre et aide toujours son prochain. Ce qu\'il déteste plus que tout c\'est Dr Eggman qui veut prendre le contrôle du monde.',
      tag: 'Gentil',
    };
  }

  render() {
    const {
      title,
      descrip,
      tag,
    } = this.state;

    return (
      <div className="app">
        <Header />
        <Filter />
        <Current title={title} descrip={descrip} tag={tag} />
        <Characters charactersList={characters} />
      </div>
    );
  }
}

// == Export
export default App;
