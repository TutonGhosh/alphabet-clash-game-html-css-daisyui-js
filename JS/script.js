function playNow()
{
    const homeScreen = document.getElementById('home-screen');
    homeScreen.classList.add('hidden');

    const playgroundScreen = document.getElementById('playground-screen');
    playgroundScreen.classList.remove('hidden')
    continueGame()
}

function continueGame()
{
    const alphabet = getRandomAlphabet();
    const displayAlphabet = document.getElementById('display-alphabet');
    displayAlphabet.innerText = alphabet;
    setElementBgColor(alphabet);
}
function gameOver()
{
    const playgroundScreen = document.getElementById('playground-screen');
    playgroundScreen.classList.add('hidden');

    const scoreScreen = document.getElementById('score-screen');
    scoreScreen.classList.remove('hidden');

    const lastScoreText = document.getElementById('current-score');
    const lastScore = lastScoreText.innerText;
    setTextElementValueByID('last-score', lastScore)

    const currentAlphabet = getElementTextByID('display-alphabet');
    removeElementBgColor(currentAlphabet);
}

function handleKeyboardKeyupEvent(event)
{
    const playerPressed = event.key;
    if(playerPressed === 'Escape')
    {
        gameOver();
    }
    const displayAlphabetElement = document.getElementById('display-alphabet');
    const displayAlphabet = displayAlphabetElement.innerText;
    
    if(playerPressed === displayAlphabet)
    {
        const currentScore = getTextElementValueByID('current-score')
        const updatedScore = currentScore + 1;
        setTextElementValueByID('current-score', updatedScore);

        removeElementBgColor(playerPressed)
        continueGame();
    }
    else
    {
        const currentLife =getTextElementValueByID('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueByID('current-life', updatedLife);
        if(updatedLife === 0)
        {
            gameOver();
        }
    }
}
document.addEventListener('keyup', handleKeyboardKeyupEvent);

function playAgain()
{
    const scoreScreen = document.getElementById('score-screen');
    scoreScreen.classList.add('hidden');
    const playgroundScreen = document.getElementById('playground-screen');
    playgroundScreen.classList.remove('hidden');

    setTextElementValueByID('current-score', 0);
    setTextElementValueByID('current-life', 3);

    continueGame()
}