 let computerWins = 0;
         let playerWins = 0;
         
         	function computerPlay(){
         		let computerCoice = Math.floor(Math.random()*3);
         		switch(computerCoice){
         			case 0:
         			return "rock";
         			break;
         			case 1:
         			return "paper";
         			break;
         			case 2: 
         			return "scissors";
         		}
         	}
         
         
         	function playRound(playerSelection, computerSelection){
         		if((computerSelection === "rock") && (playerSelection === "paper")){
         			playerWins += 1;
         			return ` computer Selected ${computerSelection} :  You selected ${playerSelection}  \n
         			You win! Paper beats Rock  \n
         			Computer: ${computerWins}  you: ${playerWins}`;
         
         		}else if((computerSelection === "rock") && (playerSelection === "scissors")){
                     computerWins += 1;
         			return ` computer Selected ${computerSelection} :  You selected ${playerSelection}  \nYou Lose! rock crushes scissors  \n
         			Computer: ${computerWins}  you: ${playerWins}`;
         		}else if((computerSelection === "rock") && (playerSelection === "rock")){
         			return ` computer Selected ${computerSelection} :  You selected ${playerSelection}  \nIt was a tie  \n
         			Computer: ${computerWins}  you: ${playerWins}`;
         
         		}else if((computerSelection === "paper") && (playerSelection === "rock")){
         			 computerWins += 1;
         			return ` computer Selected ${computerSelection} :  You selected ${playerSelection}  \nYou Lose! paper covers rock  \n
         			Computer: ${computerWins}  you: ${playerWins}`;
         
         		}else if((computerSelection === "paper") && (playerSelection === "paper")){
         			return ` computer Selected ${computerSelection} :  You selected ${playerSelection}  \nIt was a tie  \n
         			Computer: ${computerWins}  you: ${playerWins}`;
         		}else if((computerSelection === "paper") && (playerSelection === "scissors")){
         			playerWins += 1;
         			return ` computer Selected ${computerSelection} :  You selected ${playerSelection}  \nYou win! scissors cuts paper  \n
         			Computer: ${computerWins}  you: ${playerWins}`;
         
         		}else if((computerSelection === "scissors") && (playerSelection === "rock")){
         			playerWins += 1;
         			return ` computer Selected ${computerSelection} :  You selected ${playerSelection}  \nYou win! rock crushes scissors  \n
         			Computer: ${computerWins}  you: ${playerWins}`;
         
         		}else if((computerSelection === "scissors") && (playerSelection === "paper")){
         			computerWins += 1;
         			return ` computer Selected ${computerSelection} :  You selected ${playerSelection}  \nYou Lose! scissors cuts paper  \n
         			Computer: ${computerWins}  you: ${playerWins}`;
         		}else if((computerSelection === "rock") && (playerSelection === "rock")){
         			return ` computer Selected ${computerSelection} :  You selected ${playerSelection}  \nIt was a tie  \n
         			Computer: ${computerWins}  you: ${playerWins}`;
         
         		}else{
         			return ` computer selection: ${computerSelection}  You selected ${playerSelection}  \nno match found  \n
         			Computer: ${computerWins}  you: ${playerWins}`;
         		}
         	}
         
         function game(){
         for(let counter = 0; counter<5; counter++){
         	let computerResult = computerPlay();
         	
         	 // let userInput = prompt("please enter a choice, rock, paper, scissors");
         
         	 userInput = userInput.toLowerCase();
         	let resultAnounced = playRound(userInput, computerResult);
         	console.log(resultAnounced);
         }
         
         if (computerWins > playerWins) {
            console.log(`computer wins with: ${computerWins-playerWins} points`);
         }else if(computerWins< playerWins){
         	console.log(`you  wins with: ${playerWinds- playerWins} points`);
         }else{
         	console.log("it was a draw");
         }
         	 
         }
         game();