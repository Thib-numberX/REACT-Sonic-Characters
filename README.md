# REACT-Sonic-Characters

## Projet

Création d'un mini site qui répertorie les personnages de Sonic.
Le site sera fait avec le language REACT. 

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

#### Recherche

