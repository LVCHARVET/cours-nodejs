const rl = require('./rl')
const { showMenu, displayInfo } = require('./menu');

function askQuestion() {
    showMenu();
    rl.question('Veuillez entrer le numéro de l\'option choisie : ', (answer) => {
        if (answer === '10') {
            console.log('Tchao !');
            rl.close();
        } else {
            displayInfo(answer);
            askQuestion();
        }
    });
}

askQuestion();
