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

function handleKeyboardKeyupEvent(event)
{
    const playerPressed = event.key;
    const displayAlphabetElement = document.getElementById('display-alphabet');
    const displayAlphabet = displayAlphabetElement.innerText;
    console.log(playerPressed, displayAlphabet);
    
    if(playerPressed === displayAlphabet)
    {
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        currentScoreElement.innerText = currentScore + 1;

        removeElementBgColor(playerPressed)
        continueGame();
    }
    else
    {
        const currentlifeElement = document.getElementById('current-life');
        const currentlifeText = currentlifeElement.innerText;
        const currentlife = parseInt(currentlifeText);
        currentlifeElement.innerText = currentlife - 1;
        const lifeScore = parseInt(currentlifeElement.innerText)
    }
}
document.addEventListener('keyup', handleKeyboardKeyupEvent);