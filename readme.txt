docker : node.js / framework express + swagger
se positionner dans le repertoire : my-node-api
docker build -t my-node-api .
docker run -p 3000:3000 my-node-api

http://localhost:3000/api-docs/

fakesmtp :
soit double clic sur le fichier : fakeSMTP-2.0.jar
soit via la ligne de commande :java -jar fakeSMTP-2.0.jar 
ensuite démarrer le serveur

bontiasoft:
importer le projet  : Bonitasoft\gestion-note-de-frais_20240124_1331.bos

pour faire fonctionner mon process il faut :
1. avoir lancer fakesmtp avec comme port d'ecoute 2525
2. avoir lancer le contenaire docker qui contient les 2 APIs 

Ensuite déroulement : 
employe : walter.bates 
Manageur : helen.kelly
Comptable : favio.riviera

password pour chaque compte BPMN 

