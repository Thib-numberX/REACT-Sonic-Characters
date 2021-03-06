// =import

// npm

// local
// import mainLogo from 'pictures/Sonic_The_Hedgehog.png';
// style
import './header.scss';
// data

function Header() {
  // console.log('header in fired');
  return (
    <header>
      <h1 className="header-h1">
        <img className="header-img" src="pictures/Sonic_The_Hedgehog.png" alt="application : Sonic the hedgehog" />
      </h1>
    </header>
  );
}

export default Header;
