//random number code: Math.floor(Math.random() * number) + number;
//The numbers allow you to randomly generate a number between those 2
//larger number goes first 
//DO NOT FORGET MASTER FUNCTIONswitch(pokemon){
// 		switch(pokemon){
// 		case "Pikachu":
// 		text = "Pikachu, I choose you!";
// 		break;
// 		case "Piplup":
// 		text = "Piplup, I choose you!";
// 		break;
// 		case "Litten":
// 		text = "Litten, I choose you!";
// 		break;
//get die to work, make it so they roll with the assigned number die
//One more die to use


runGame();

function runGame(){
	choosePokemon("pokemon");
	startTheAdventure();
	let wasGoodRoll = randomizeDiceRoll(4);
	//let result = completeDiceRoll(4);
	//console.log(result);
	proceedToLushJungle(wasGoodRoll);
	proceedToWelaVolcano();
	let locationChoice = proceedToLocation();

	// !  use to show opposite of function 
	if(locationChoice != true){
		proceedToEnd(wasGoodRoll);

//put rest of functions after proceed to location in here

	}
	rollEndGame();
	chooseYourTrainer();
	chooseYourLegendary();

}

function choosePokemon(name){ 
	let dieRoll = rollDie(3);
	alert ("Roll die for your Pokemon! Pikachu, Piplup, Litten");
	if(rollDie === 1){
		alert("Litten! I choose you!");
	}
	else if(rollDie === 2){
		alert("Piplup! I choose you!");
	}
	else{
		alert("Pikachu! I choose you!")
	}
}





function startTheAdventure(){//7 sided die
	alert("Hello! Welcome to the Pokemon Adventure! You seem to have lost your trainer! After your Totem Pokemon battle, you got lost within the den!");
	alert("Let's start by rolling to find out what Region you are in!");
	let rollResult3 = rollDie(7);
	if(rollResult3 = 1){
		alert("You are in the Kanto Region!");
	}
	else if(rollResult3 = 5){
		alert("You are in the Alola Region!");
	}
	else{
		alert("You are in the Sinnoh Region!");
	}
	alert("Roll dice in order to choose your path to get back to your trainer in HeaHea City! Low rolls result in bad paths and injuries to your Pokemon. Ultimately, too many bad rolls will result in your Pokemon ending up at Memorial Hill, never reaching the trainer. High rolls will bring you home safely!");
	alert("Good luck on your adventure!");
	alert("You start in the Totem den, roll the 4 sided die to start your path to home!");
	alert("Will you make it through the Totem Den unscathed? Roll to find out!"); 
}

rollDie(4);

function rollDie(side) {
	let dieRoll = Math.floor(Math.random() * side) + 1;
	return dieRoll;
}

function randomizeDiceRoll(side){
	let dieRoll = rollDie(side);
	if(dieRoll >= side/2){
		return true;
	}
	else{
		return false;
	}
}



function proceedToLushJungle(wasGoodRoll){
	if(wasGoodRoll){
		alert("Yay! Your Pokemon was able to make it out of the Totem Den without engaging with any of the other Pokemon inside!");
	}
	else{
		alert("Oh no! Your Pokemon was attacked by a wild Tentacool! It suffered some injury!");
	}
	alert("Now we move on to Lush Jungle! Will your Pokemon make it through safely?");
}


//find a way to connect the responses to the dice rolls, the story cannot conitnue otherwise 
//Also find way to make specific parts use specific dice 
//After we get to Wela, Make option to roll 20 sided die, 1-9, you pass Paniola Ranch with no rest, 10-15 you stop to rest, 16-20 you bypass everything, head to Route 6 and make it safely


function proceedToWelaVolcano(wasGoodRoll){
	alert("Your Pokemon has made it to Lush Jungle! Roll your die in order to see how you move on!");
	if(wasGoodRoll){
		alert("Yay! Your Pokemon made it safely through Lush Jungle! It avoided all other Pokemon!");
	}
	else{
		alert("Oh no! Your Pokemon was attacked by a wild Butterfree! It sustained some injury!");
	}
	alert("Now we move on to Wela Volcano Park! Will your Pokemon avoid Salandits and Cubones?");
}




function proceedToLocation(wasGoodRoll){
	alert("Your Pokemon has made it to Wela Volcano Park! Roll your die in order to see how you move on!");
	let rollResult = rollDie(20);
	if(wasGoodRoll){
		alert("Yay! Your Pokemon made it safely through Wela Volcano Park! It was so sneaky the other Pokemon didn't see it!");
	}
	else{
		alert("Oh no! Your Pokemon was attacked by a wild Cubone! It suffered some burns!")
	}//20 sided die
	alert("We have a choice here! Roll the 20 sided die to determine if you will stay in Paniola Ranch to rest, if you will move on to Paniola Town, or if you will bypass everything and end up in HeaHea City!");
	if(rollResult <= 8)
		alert("Your Pokemon passes through Paniola Ranch but does not stop to rest.");
	else if(rollResult >= 9 && rollResult <= 15)
		alert("Your Pokemon arrives in Paniola Ranch and takes a well needed nap at the Pokemon Center!");
	else{
		alert("Your Pokemon bypasses Paniola Ranch altogether and makes it to HeaHea City safely!");
		return true;
	}
	return false;
}


function proceedToEnd(wasGoodRoll){
	alert("Your Pokemon has made it to Paniola Town! Your last die roll determines if you will make it home!");
	if(wasGoodRoll){
		alert("You made it safely to HeaHea City! Your trainer was so worried about you but it happy you are home safe!");
	}
	else{
		alert("Oh no! Your Pokemon is too exhausted to find its way home! Unfortuntely, they strayed off the path and found themselves face to face with Digletts! Now they are trapped at Memoral Hill.");
	}
}




function rollEndGame(){
	alert("You have reached the end of your adventure! Hopefully your Pokemon made it back to your trainer!");
	alert("You can roll for your trainer and to see what legendary you have!");
}


function chooseYourTrainer(){
	alert("You get to see who your trainer is! Roll to find out!");
	let rollResult2 = rollDie(6);
	if(rollResult2 <= 2){
		alert("Your trainer is Ash Ketchum!");
	}
	else if(rollResult2 >= 3 && rollResult2 <=4){
		alert("Your trainer is Misty!");
	}
	else{
		alert("Your Trainer is Brock!");
	}
}


function chooseYourLegendary(){
	alert("You and your trainer seem to have a legendary Pokemon! Roll to see which legendary you have! This has no effect on choices, it is just for fun!");
	let rollResult4 = rollDie(9);
	if(rollResult4 <= 3){
		alert("Your legendary is Lugia!");
	}
	else if(rollResult4 >= 4 && rollResult4 <=6){
		alert("Your legendary is Rayquaza!");
	}
	else{
		alert("Your legendary is Jirachi!");
	}
}
