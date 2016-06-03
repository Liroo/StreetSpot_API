# Street'Spot
--
### Api Server part
--
#### Proem

Bonjour, mon nom est Pierre Monge @Liroo et je suis le dev. de l'api server de l'application Street Spot.

Git Hub : [Liroo](https://github.com/Liroo)

Mail perso/pro : pierre-monge@hotmail.fr / pierre.monge@epitech.eu

How to :
- Accéder à ce repository :
  * Avoir un compte git hub qui est listé dans les membres autorisés à cloner ce repo.
  * `git clone https://github.com/Liroo/api_server.git`
  * cd api_server
- Savoir les avancées du projet :
  * Demander à Pierre
  * Voir les différents commits sur gitk / git log / le projet github sur internet

#### Follow-up

**Pour lancer le serveur sur un ordinateur lambda :**
> En étant déjà dans le répértoire courant du server

```sh
node server.js
```
Si jamais vous possédez **nodemon** vous pouvez changer node par **nodemon** ce qui va redémarer le server à chaque changement d'un fichier.

Très pratique si vous travaillez sur le serveur quand il doit être tésté.

**Pour obtenir l'adresse ip de votre ordinateur :**

```sh
ip addr | grep -Po '(?!(inet 127.\d.\d.1))(inet \K(\d{1,3}\.){3}\d{1,3})'
```
Et ça devrait vous renvoyé directement l'adresse ip de votre pc ! C'est t'i pas magique ?

#### Envoyer des requètes

Le serveur est lancé et vous avez son adresse ip, il ne manque plus qu'à lui envoyer des requètes.

Vous pouvez utilisez POSTMAN qui est un add-on de *chrome* : [PostMan](https://www.getpostman.com)

Si vous êtes en train de dev sur l'appli android ou l'appli iOS, merci de bien vouloir vous renseigner pour suivre les procédures à appliquer pour pouvoir envoyer des requètes sur le serveur dans votre technologie.

:copyright: Pierre Monge
