// =import

// npm
import PropTypes from 'prop-types';
// local
import Character from './Character';

// style
import './characters.scss';
// data

function Characters({ charactersList }) {
  // console.log({charactersList});
  return (
    <div className="characters">
      <input className="characters-input" type="text" placeholder="Rechercher" />
      <p className="characters-para">X personnages d'affichés</p>
      <ul className="characters-ul">
        {charactersList.map((character) => (
          <Character {...character} />
        ))}
      </ul>
    </div>
  );
}

Characters.propTypes = {
  charactersList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Characters;
