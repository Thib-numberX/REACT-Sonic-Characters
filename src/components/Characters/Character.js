// =import

// npm
import PropTypes from 'prop-types';

// local

// style
import './characters.scss';
// data

function Character({ name, picture, click }) {
  // console.log(character); ...character
  // console.log('Character is fired');
  // console.log(click);
  return (
    <div
      className="characters_img-li"
      key={name}
      onClick={() => {
        click(name);
      }}
    >
      <img className="characters-img" src={picture} alt={name} />
      <li className="characters-li">{name}</li>
    </div>
  );
}

Character.protoTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};

export default Character;
