export const CHOICES = [
    { name: 'rock', uri: 'http://pngimg.com/uploads/stone/stone_PNG13622.png' },
    { name: 'paper', uri: 'https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png' },
    { name: 'scissors', uri: 'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png' }];

randomComputerChoice = () =>
    CHOICES[Math.floor(Math.random() * CHOICES.length)];

const getRoundOutcome = userChoice => {
    const computerChoice = randomComputerChoice().name;
    let result;

    if (userChoice === 'rock') {
        result = computerChoice === 'scissors' ? 'Victory!' : 'Defeat!';
    }
    if (userChoice === 'paper') {
        result = computerChoice === 'rock' ? 'Victory!' : 'Defeat!';
    }
    if (userChoice === 'scissors') {
        result = computerChoice === 'paper' ? 'Victory!' : 'Defeat!';
    }

    if (userChoice === computerChoice) result = 'Tie game!';
    return [result, computerChoice];
};

const determineStatusResult = (result) => {
    let colorText, iconText;

    switch (result) {
        case "Victory!": colorText = "green", iconText = "ios-medal"; break;
        case "Defeat!": colorText = "red", iconText = "ios-refresh"; break;
        case "Tie game!": colorText = "black", iconText = "ios-reorder"; break;
    }
    return [colorText, iconText];
}

// win,lost,tie
const determineStatusDetailResult = (result, prevResult) => {

    let [winResult, defeatResult, tieResult] = prevResult;

    switch (result) {
        case "Victory!": winResult++; break;
        case "Defeat!": defeatResult++; break;
        case "Tie game!": tieResult++; break;
    }
    return [winResult, defeatResult, tieResult];
}

const roundNumber = (number) => {
    return Math.round(number);
}

export { getRoundOutcome, determineStatusResult, determineStatusDetailResult,roundNumber }
