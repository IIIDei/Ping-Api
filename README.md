# TP - WIK-DPS-TP01 - API TypeScript

## Consignes

L'objectif est de mettre en place une API en TypeScript qui :

- Retourne les headers de la requête HTTP au format JSON lorsque la requête est de type `GET` sur `/ping`.
- Écoute sur un port configurable via la variable d'environnement `PING_LISTEN_PORT` (si la variable est définie) ou sur un port par défaut au choix (ex : 8080).
- Gère les erreurs en renvoyant une réponse vide avec le code 404 pour toute requête autre que `GET /ping`.

## Prérequis

- **Node.js** : Assurez-vous d'avoir [Node.js installé](https://nodejs.org/).
- **npm** : Le gestionnaire de paquets de Node.js (installé automatiquement avec Node.js).

## Installation et lancement du projet

1. **Cloner le projet :**

   Clonez le dépôt sur votre machine :
   ``git clone https://github.com/IIIDei/ping-api.git``
   ``cd ping-api``

3. **Installer les dépendances :**  
   ``npm install``

6. **Lancer le serveur :**
   Lancez le serveur (port par défaut : 8080) :
   ``npm start``

   Vous pouvez aussi définir un port personnalisé avec la variable d'environnement PING_LISTEN_PORT :  
``PING_LISTEN_PORT=3000 npm start``
