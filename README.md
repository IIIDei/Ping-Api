# **Node.js Ping API**

Une API simple construite avec **Node.js**, **TypeScript**, permettant de retourner les headers de la requête sur la route `/ping`. La documentation de l'API est disponible via **Swagger**.

## **Table des matières**

- [Fonctionnalités](#fonctionnalités)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Lancer le projet](#lancer-le-projet)
- [Endpoints](#endpoints)
- [Documentation Swagger](#documentation-swagger)
- [Scripts npm](#scripts-npm)
- [Contribuer](#contribuer)
- [Licence](#licence)

## **Fonctionnalités**

- Route `/ping` qui retourne les headers de la requête au format JSON.
- Documentation Swagger générée automatiquement.
- Middleware pour définir correctement le header `Content-Length`.
- Support des variables d'environnement via `.env`.

## **Prérequis**

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- **Node.js** (version 16 ou supérieure) : [Téléchargez Node.js ici](https://nodejs.org/)
- **npm** (inclus avec Node.js)

## **Installation**

1. **Cloner le dépôt :**
   ```bash
   git clone https://github.com/IIIDei/Ping-Api.git
   cd nodejs-ping-api

2. **Installer les dépendances :
   ```bash
   npm install
   ```

## **Configuration**
Créer un fichier .env : À la racine du projet, créez un fichier .env avec les variables d'environnement nécessaires :

   ```bash
   PING_LISTEN_PORT=3000
   ```
   `PING_LISTEN_PORT` : Définit le port sur lequel le serveur écoutera (par défaut : 3000).


## **Lancer le projet**
**En mode développement :**
Pour démarrer le projet avec recompilation automatique :

   ```bash
   npm run dev
   ```

**En mode production :**
Compiler le projet TypeScript :

   ```bash
   npm run build
   ```

Démarrer le serveur :

   ```bash
   npm start
   ```

## **Endpoints**

![Texte alternatif](https://cdn.discordapp.com/attachments/1250870245246238853/1333189982407622786/image.png?ex=6797fd6d&is=6796abed&hm=dd9768f54e74579ef096c3d325037e58c4070408e9df1aede7d75f250085d002&)
![Texte alternatif](https://cdn.discordapp.com/attachments/1250870245246238853/1333189757152399442/image.png?ex=6797fd37&is=6796abb7&hm=1b4bf8f5ffac7b7535dda5b90d29d1c17d2cc726f2d240ba5b035a331feb5873&)
