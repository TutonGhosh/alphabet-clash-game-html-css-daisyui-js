function getRandomAlphabet()
{
    const alphabetString = 'qwertyuiopasdfghjklzxcvbnm';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}

function setElementBgColor(elementID)
{
    const element = document.getElementById(elementID);
    element.classList.add('bg-yellow-300')
}