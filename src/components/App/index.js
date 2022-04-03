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

    this.handleFilterTagClick = this.handleFilterTagClick.bind(this);
    this.handleClickCharacters = this.handleClickCharacters.bind(this);

    this.state = {
      title: 'Sonic',
      descrip: 'Sonic est un hérisson supersonique le plus rapide du monde. Toujours en vadrouille, il va où le vent l\'emporte et vit sa vie selon ses propres règles plutôt que celles de ceux qui l\'entourent. Il est plutôt facile à vivre et aide toujours son prochain. Ce qu\'il déteste plus que tout c\'est Dr Eggman qui veut prendre le contrôle du monde.',
      picture: '/pictures/sonic.jpg',
      tag: 'Gentil',
      charactersList: characters,
    };
  }

  handleFilterTagClick(key) {
    //! pour un map
    // 1 - Je prend un array
    // 2 - J'envoi les éléments en argument d'une fonction anonyme
    // 3- qui va ensuite s'exécuter
    // 4- par défaut map renvoi un tableau .
    let filteredCharacterList = characters;
    if (key !== 'Tous') {
      filteredCharacterList = characters.filter((items) => items.type === key);
    }
    // console.log(filteredCharacterList);
    //! pour un filter
    // 1- Prend un array
    // 2 - J'envoi les éléments en argument d'une fonction anonyme
    // 3- Il attend une fonction anynonyme qui va renvoyer une comparaison comparaison
    // 4- Il va prendre chaques fois que la comparaison est vrai et va créer un array
    // 5 - et retourner un array
    this.setState({
      charactersList: filteredCharacterList,
    });
  }

  handleClickCharacters(currentName) {
    // console.log(currentName);
    let filteredCharacters = characters;

    filteredCharacters = characters.filter((items) => items.name === currentName);
    console.log(filteredCharacters);

    const {
      name,
      description,
      picture,
      type,
    } = filteredCharacters[0];

    console.log({ name, description, picture, type });

    this.setState({
      title: name,
      descrip: description,
      picture: picture,
      tag: type,
    });
  }

  render() {
    const {
      title,
      descrip,
      picture,
      tag,
      charactersList,
    } = this.state;
    // console.log({ title, descrip, picture, tag });

    return (
      <div className="app">
        <Header />
        <Filter tagClick={this.handleFilterTagClick} />
        <Current title={title} descrip={descrip} picture={picture} tag={tag} />
        <Characters charactersList={charactersList} characterClick={this.handleClickCharacters} />
      </div>
    );
  }
}

// == Export
export default App;
