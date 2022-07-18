# REACT-Sonic-Characters

## Projet

Création d'un mini site qui répertorie les personnages de Sonic.

## Contexte 

Le langage mis en application est REACT. Cependant, le but de cette auto-exercice est de mettre en application ce qui a été vu lors de la première semaine de formation sur ce langage. C'est pour cela que j'ai utilisé des classes à la place des hooks. Effecteivement, ces derniers n'ont pas été abordés lors de la première semaine. Car, il existe encore des documentations qui utilisent des classes, et lors de la vie professionnelle, il sera possible de voir des apps non mise à jour vers les hooks. C'est pourquoi l'école O'Clock a commencé par les classes.

### A faire

#### Préalable

-Création d'une simulation de base de données via un fichier
-Wireframe du site

#### Le site

Le site ne sera peut-être pas responsive design. Etant donné que c'est un exercice pour s'entrainer à manipuler REACT, la priorité sera autour des bonnes pratiques du language.

## difficultés rencontrées

Lors de l"initialisation sur mon hote, j'ai dû configurer ce dernier pour qu'il mettent à jour les déépendances via le terminal de commande. Pour cela je suis allé sur la documentation de Yarn (site). Il était dit qu'il ffalit installer NodeJS, le serveur JS. Donc, je suis allé sur le site indiqué dans la documentation de Yarn, puis j'ai installé Node via windows installer.

Cela ne fonctionnait pas, ou plutôt n'avait pas l'air de fonctionner. J'ai lancé un appel au secour sur le slack de ma promo pour savoir si quelqu'un avait une réposne à me fournir : sans succès J'ai du éteindre le PC (heeure tardice). Le lendemain matin, j'ai lancer le pc, puis lancé la commande Yarn, via Git bash, et les dépendances ce sont installées. J'en conclu qu'il faut redémarrer le pc : sans doute pour lancer le serveur

## Etape 

### Dynamisation

#### liste

Dans un premier temps, je vais dynamiser l'affichage de la liste. Pour cela il faut :
- Récupérer les données depuis le composant principal ; 
- faire du destructuring ;
- passer les données vers le composant "Characters" : penser à valider les props ; 
- une fois les données récupérées, il faudra faire une boucle pour générer automatiquement les "li"

##### Difficultés rencontrées

L'affichage dynamique des images ne voulait pas se faire tant que le dossier se trouvait dans le dossier src. Pour que cela fonctionne, j'ai dû le déplacer dans le dossier Public. Afin de savor ce que je devais faire,j'ai : 
  - deamnder sur le slack de la promo
  - j'ai effectué des recherches sur des sites et sur youtube : 
  -   https://stackoverflow.com/questions/43823289/how-to-import-image-svg-png-in-a-react-component
  -   https://askcodez.com/charger-des-images-locales-dans-react-js.html
  -    https://www.youtube.com/watch?v=KLkcmw8wAj4

### Mise en place de State

Pour mettre en place state : soit un état de base dès l'ouverture de la page. Il faut transformer le composant en class. 
Etablir un etat de base : voir sur les différents commit du cours

#### flitre
Tag : tous, gentil, mechant

Je veux pouvoir filtrer la liste grâce au 3 boutons (tag). Le filtre s'applique lorsque l'utilisateur clique sur on btn.
Donc avec la méthode onclik, je dois pouvoir filtrer [ filter() ]. Je pense qu'il faut savoir sur quel btn on click : peut-être 3 methodes à coder ? 

Finalement il n'y avait qu'une méthode à coder. Il onClick pour être mis directement sur la méthode qui filtre. J'ai reçu de l'aide d'un ancien élève de O'Clock qui m'a expliqué map() et filter(), pui la bonne façon de faire.

#### Difficultés rencontrées

Je suis parti sur faire une méthode pour le click qui appelle la méthode pour le filtre. Ce qui n'est pas nécessaire.
J'ai aussi tenté la méthode map(), alors qu'il fallait filtrer, donc filter(). Ce qui veut dire que je n'avais pas corectement saisi leur utilisation. Comme dit au-dessus, j'ai reçu de l'aide via discord d'un ancien élève de O'Clock. Il m'a expliqué simplement.

#### Le click sur un personnage

Je dois dynamiser l'affichage du personnage. C'est-à-dire, lorsque je clique sur un personnage, le state doit se mettre à jour pour afficher les données attendues.

Creer une méthode qui met à jour le state lors du clique
- trouver la bonne function
- mettre des OnClick sur les div

#### Difficultés rencontrées
appropriation de la méthode filter. J'ai eu un soucis dans restitution du setState. Effectivement, si je ne rajoute pas [0] au retour de la fonction filter(), je n'arrive pas à rentrer dans l'objet.
const {
      name,
      description,
      picture,
      type,
    } = filteredCharacters[0];

#### Recherche

L'input doit permettre d'afficher le personnage voulu. Il faut donc initiliaser la serach et récupérer ce qu'écrit l'utilisateur.

