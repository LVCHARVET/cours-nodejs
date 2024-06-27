const os = require('os');

function showMenu() {
    console.log(`
    Quelle information sur l'OS désirez-vous?
    1. Afficher l'architecture de votre OS.
    2. Afficher la plateforme.
    3. Afficher les informations sur le CPU.
    4. Afficher le nom de l'hôte.
    5. Afficher les interfaces réseau.
    6. Afficher le temps de fonctionnement.
    7. Afficher le répertoire personnel.
    8. Afficher la mémoire libre.
    9. Afficher la mémoire totale.
    10. Quitter le menu.
  `);
}

function displayInfo(option) {
    switch (option) {
        case '1':
            console.log('Architecture :', os.arch());
            break;
        case '2':
            console.log('Plateforme :', os.platform());
            break;
        case '3':
            console.log('Infos CPU :', os.cpus());
            break;
        case '4':
            console.log('Nom de l\'hôte :', os.hostname());
            break;
        case '5':
            console.log('Interfaces réseau :', os.networkInterfaces());
            break;
        case '6':
            console.log('Temps de fonctionnement :', os.uptime(), 'secondes');
            break;
        case '7':
            console.log('Répertoire personnel :', os.homedir());
            break;
        case '8':
            console.log('Mémoire libre :', os.freemem());
            break;
        case '9':
            console.log('Mémoire totale :', os.totalmem());
            break;
        default:
            console.log('Veuillez renseigner une commande valide !');
    }
}

module.exports = { showMenu, displayInfo };
