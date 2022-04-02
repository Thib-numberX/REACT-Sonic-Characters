// =import

// npm

// local

// style
import './filter.scss';
// data

function Filter() {
  // console.log('filter in fired');
  return (
    <div className="filter">
      <p className="filter-all">Tous</p>
      <p className="filter-kind">Gentil</p>
      <p className="filter-bad">Méchant</p>
    </div>
  );
}

export default Filter;
