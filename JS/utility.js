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
function removeElementBgColor(elementID)
{
    const element = document.getElementById(elementID);
    element.classList.remove('bg-yellow-300')
}

function getElementTextByID(elementID)
{
    const element = document.getElementById(elementID);
    const text = element.innerText;
    return text;
}

function getTextElementValueByID(elementID)
{
    const currentScoreElement = document.getElementById(elementID);
    const currentScoreText = currentScoreElement.innerText;
    const value = parseInt(currentScoreText);
    return value;
}
function setTextElementValueByID(elementID, value)
{
    const element = document.getElementById(elementID);
    element.innerText = value;
}
