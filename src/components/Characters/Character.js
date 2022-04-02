// =import

// npm
import PropTypes from 'prop-types';

// local

// style
import './characters.scss';
// data

function Character({ name, picture }) {
  // console.log('Character is fired');
  return (
    <div className="characters_img-li" key={name}>
      <img className="characters-img" src={picture} alt="" />
      <li className="characters-li">{name}</li>
    </div>
  );
}

Character.prototypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Character;
