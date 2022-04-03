// =import

// npm
import PropTypes from 'prop-types';
// local
// import imgHard from '/pictures/sonic.jpg';
// style
import './current.scss';
// data

function Current({ title, descrip, tag }) {
  // console.log('current in fired');
  return (
    <section className="current">
      <img className="current-img" src="/pictures/sonic.jpg" alt="" />
      <h2 className="current-title">{title}</h2>
      <p className="current-descrip">{descrip}</p>
      <p className="current-tag">{tag}</p>
    </section>
  );
}

Current.propTypes = {
  title: PropTypes.string.isRequired,
  descrip: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default Current;
