// =import

// npm
import PropTypes from 'prop-types';
// local
// import imgHard from '/pictures/sonic.jpg';
// style
import './current.scss';
// data

function Current({ title, descrip, picture, tag }) {
  // console.log('current in fired');
  return (
    <section className="current">
      <img className="current-img" src={picture} alt="" />
      <h2 className="current-title">{title}</h2>
      <p className="current-descrip">{descrip}</p>
      <p className="current-tag">{tag}</p>
    </section>
  );
}

Current.propTypes = {
  title: PropTypes.string.isRequired,
  descrip: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default Current;
