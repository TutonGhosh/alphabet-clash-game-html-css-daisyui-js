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