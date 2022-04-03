// =import

// npm
import PropTypes from 'prop-types';
// local

// style
import './filter.scss';
// data

function Filter({ tagClick }) {
  // console.log('filter in fired');
  // console.log(tagClick);
  return (
    <div className="filter">
      <p
        className="filter-all"
        key="Tous"
        onClick={() => {
          tagClick('Tous');
        }}
      >Tous
      </p>
      <p
        className="filter-kind"
        key="Gentil"
        onClick={() => {
          tagClick('Gentil');
        }}
      >Gentil
      </p>
      <p
        className="filter-bad"
        key="bad"
        onClick={() => {
          tagClick('Méchant');
        }}
      >
        Méchant
      </p>
    </div>
  );
}

Filter.propTypes = {
  tagClick: PropTypes.func.isRequired,
};

export default Filter;
