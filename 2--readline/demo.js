const rl = require('./readline');

const askQuestion = () => {
    rl.question("Quel est votre nom ?", (name) => {
        if (name.toLowerCase() === "exit") {
            rl.close();
        } else {
            console.log(`Bonjour ${name} !`);
            askQuestion();
        }
    });
};

askQuestion();