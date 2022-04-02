// =import

// npm

// local
import imgHard from '../../pictures/sonic.jpg';
// style
import './current.scss';
// data

function Current() {
  // console.log('current in fired');
  return (
    <section className="current">
      <img className="current-img" src={imgHard} alt="" />
      <h2 className="current-title">Sonic</h2>
      <p className="current-descrip">Sonic est un hérisson supersonique le plus rapide du monde. Toujours en vadrouille, il va où le vent l'emporte et vit sa vie selon ses propres règles plutôt que celles de ceux qui l'entourent. Il est plutôt facile à vivre et aide toujours son prochain. Ce qu'il déteste plus que tout c'est Dr Eggman qui veut prendre le contrôle du monde.
      </p>
      <p className="current-tag">Gentil</p>
    </section>
  );
}

export default Current;
