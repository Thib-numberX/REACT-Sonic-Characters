// =import

// npm
import PropTypes from 'prop-types';
// local
import Character from './Character';

// style
import './characters.scss';
// data

function Characters({ charactersList, characterClick }) {
  // console.log({charactersList});
  // console.log(characterClick);
  return (
    <div className="characters">
      <input className="characters-input" type="text" placeholder="Rechercher" />
      <p className="characters-para">X personnages d'affichés</p>
      <ul className="characters-ul">
        {charactersList.map((character) => (
          <Character {...character} click={characterClick} key={character.name} />
        ))};
      </ul>
    </div>
  );
}

Characters.propTypes = {
  charactersList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      // description: PropTypes.string.isRequired, On ne valide que les données dont on va se servir
      picture: PropTypes.string.isRequired,
      // type: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  characterClick: PropTypes.func.isRequired,
};

export default Characters;
