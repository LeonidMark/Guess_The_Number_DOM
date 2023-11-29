/**
 * Guess the number - DOM Edition
 *
 * Skriv om ”gissa talet” till att ta emot och visa utfall i DOM. Använd
 * formulär-fält för att ta emot input från användaren, och när formuläret
 * skickas (submits) så jämför det gissade talet mot svaret och visar utfallet
 * i DOM istället för alert()-rutor.
 *
 * STEG 1 ✅
 * En input-fält där man kan gissa på ett tal. En knapp för att gissa.
 *
 * STEG 1.1✅
 * Visa resultatet i en alert.
 *
 * STEG 1.2
 * Visa om resultatet var rätt eller inte i ett HTML-element.✅
 * (T.ex. ”Du gissade rätt!” eller ”Du gissade fel!”)
 * Ska så klart uppdateras varje gång användaren gissar.
 *
 * STEG 2
 * Visa om det gissade talet var för högt eller lågt i ett HTML-element.✅
 *
 * STEG 3✅
 * Visa antalet gissningar hittills i ett HTML-element.
 * Ska så klart också uppdateras varje gång användaren gissar.
 *
 * STEG 4✅
 * Skapa en knapp för att starta om spelet (ett nytt tal ska slumpas fram och
 * antalet gissningar ska nollställas).
*
*/

const getRandomNumber = (max = 10) => {
	return Math.ceil( Math.random() * max );
}

let numberGuess=getRandomNumber()
const inputGuessEl=document.querySelector('#inputGuess')
const guessFormEl=document.querySelector('#GuessForm')
const tryItBtnEL=document.querySelector('#tryItBtn')
let attempts=0;
const guessHtmlEl=document.querySelector('#guessHtml')



const startGame=()=>{
	numberGuess=getRandomNumber()
	attempts=0;
	userGuess='';
	inputGuessEl.focus()
	
}



guessFormEl.addEventListener('submit',(e)=>{
	e.preventDefault()
	userGuess=Number(inputGuessEl.value)
	console.log(`The Number You entered is ${userGuess} and the generated number is ${numberGuess} `)
	attempts++;
	if(userGuess === numberGuess){
		guessHtmlEl.innerHTML='WOWW You Guessed right after so many times: ' +attempts
		guessHtmlEl.setAttribute("style", "color:green;")
		tryItBtnEL.setAttribute('disabled', 'disabled')
		
	}else if(userGuess > numberGuess){
		guessHtmlEl.innerText='Ahh...your guess is to high... times guessed: ' +attempts
		guessHtmlEl.setAttribute("style", "color:red;")
		
	}else if(userGuess < numberGuess){
		guessHtmlEl.innerText='Ahh.. You Guess is to low.. times guessed: ' +attempts
		guessHtmlEl.setAttribute("style", "color:red;")
		
	}
	else{
		guessHtmlEl.innerText='NONONO You have to write a number!!! Times Guessed:'+attempts
		guessHtmlEl.setAttribute("style", "color:red;")
		
	}
	inputGuessEl.value=''
	inputGuessEl.focus()
	
})
const clearBtnEl=document.querySelector('#ClearBtn')
guessFormEl.addEventListener('reset',()=>{
	startGame()
	
	tryItBtnEL.removeAttribute('disabled')
	guessHtmlEl.innerHTML='';
})

