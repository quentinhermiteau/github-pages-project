# Nfassory DIABY WORDPRESS

Voici mon site web perso pour y accéder veuillez tapez les commandes suivantes : 

Tout d'abord téléchargeons la dernière version de WordPress :


`wget https://fr.wordpress.org/wordpress-latest-fr_FR.zip
`

Ensuite nous allons extraire le contenu du zip à la racine de notre hôte virtuel (/var/www/wordpress dans cet exemple) :

`sudo unzip wordpress-latest-fr_FR.zip -d /var/www
`

On va renforcer légèrement la sécurité en attribuant des droits un peu restrictifs aux fichiers :

`sudo chown www-data:www-data /var/www/wordpress -R
`
`sudo chmod -R -wx,u+rwX,g+rX,o+rX /var/www/wordpress
`

Pour créer la base de données qu'utilisera WordPress, le plus simple est de se connecter avec le client MySQL :

`sudo mysql
`

On arrive alors sur la console SQL sur laquelle nous allons entrer ces commandes (en remplaçant mot_de_passe) :

`CREATE DATABASE wordpress;
 CREATE USER 'wpuser'@'localhost' IDENTIFIED BY 'mot_de_passe';
 GRANT ALL ON wordpress.* TO 'wpuser'@'localhost';
 FLUSH PRIVILEGES;
 QUIT;`

