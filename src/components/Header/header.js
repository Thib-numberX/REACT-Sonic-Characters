// =import

// npm

// local
import mainLogo from 'src/pictures/Sonic_The_Hedgehog.png';
// style

// data

function Header() {
  // console.log('header in fired');
  return (
    <header>
      <h1>
        <img src={mainLogo} alt="logo" />
      </h1>
    </header>
  );
}

export default Header;
