// =import

// npm

// local

// style
import './characters.scss';
// data

function Characters() {
  // console.log('characters in characters');
  return (
    <div className="characters">
      <input className="characters-input" type="text" placeholder="Rechercher" />
      <p className="characters-para">X personnages d'affichés</p>
      <ul className="characters-ul">
        <li className="characters-li">Test</li>
        <li className="characters-li">Test</li>
        <li className="characters-li">Test</li>
        <li className="characters-li">Test</li>
        <li className="characters-li">Test</li>
        <li className="characters-li">Test</li>
        <li className="characters-li">Test</li>
        <li className="characters-li">Test</li>
        <li className="characters-li">Test</li>
        <li className="characters-li">Test</li>
        <li className="characters-li">Test</li>
        <li className="characters-li">Test</li>
        <li className="characters-li">Test</li>
        <li className="characters-li">Test</li>
      </ul>
    </div>
  );
}

export default Characters;
