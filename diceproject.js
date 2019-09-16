//random number code: Math.floor(Math.random() * number) + number;
//The numbers allow you to randomly generate a number between those 2
//larger number goes first 
//DO NOT FORGET MASTER FUNCTION

function runGame(){

}

function choosePokemon(name){ //we need to get the prompt working!
	let pokemon = prompt ("Please choose your Pokemon! Pikachu, Piplup, Litten");
	switch(pokemon){
		case "Pikachu":
		text = "Pikachu, I choose you!";
		break;
		case "Piplup":
		text = "Piplup, I choose you!";
		break;
		case "Litten":
		text = "Litten, I choose you!";
		break;
	}
}
choosePokemon("pokemon");
console.log(text);



function startTheAdventure(){
	let text1 = alert("Hello! Welcome to the Pokemon Adventure! You seem to have lost your trainer on Akala Island in the Alola region! After your Totem Pokemon battle, you got lost within the den!");
	let text2 = alert("Roll dice in order to choose your path to get back to your trainer in HeaHea City! Low rolls result in bad paths and injuries to your Pokemon. Ultimately, too many bad rolls will result in your Pokemon ending up at Memorial Hill, never reaching the trainer. High rolls will bring you home safely!");
	let text3 = alert("Good luck on your adventure!")
	let text4 = alert("You start in the Totem den, roll the 4 sided die to start your path to home!")
	prompt("")
}
startTheAdventure();


function randomizeDiceRoll(side){
	let dieRoll = Math.floor(Math.random() * side) + 1;
	if(dieRoll >= side/2){
		return true;
	}
	else{
		return false;
	}
}
let result = randomizeDiceRoll(4);
console.log(result);
