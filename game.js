 
var finalResult = document.querySelector('.finalDisplay');
finalResult.style = 'display:none';
 var resultUpdates = document.querySelector('.resultUpdates');
 var computerScore = 0;
 var resultAnounced
         var playerScore = 0;
         var playerChoice = '';
         var playNumber = 0;
         
         	function computerPlay(){
         		var computerCoice = Math.floor(Math.random()*3);
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
         			playerScore += 1;
         			return ` computer Selected<span class="computer-selection"> ${computerSelection} :</span>  You selected <span class="player-selection"> ${playerSelection} </span>  \n
         			You win! Paper beats Rock  \n\n
         			Computer: ${computerScore}  &nbsp;&nbsp;&nbsp; you: ${playerScore}`;
         
         		}else if((computerSelection === "rock") && (playerSelection === "scissors")){
                     computerScore += 1;
         			return ` computer Selected <span class="computer-selection"> ${computerSelection} :</span>  You selected <span class="player-selection"> ${playerSelection} </span>  \nYou Lose! rock crushes scissors  \n\n
         			Computer: ${computerScore}  &nbsp;&nbsp;&nbsp; you: ${playerScore}`;
         		}else if((computerSelection === "rock") && (playerSelection === "rock")){
         			return ` computer Selected <span class="computer-selection"> ${computerSelection} :</span>  You selected <span class="player-selection"> ${playerSelection} </span>  \nIt was a tie  \n\n
         			Computer: ${computerScore}  &nbsp;&nbsp;&nbsp; you: ${playerScore}`;
         
         		}else if((computerSelection === "paper") && (playerSelection === "rock")){
         			 computerScore += 1;
         			return ` computer Selected <span class="computer-selection"> ${computerSelection} :</span>  You selected <span class="player-selection"> ${playerSelection} </span>  \nYou Lose! paper covers rock  \n\n
         			Computer: ${computerScore}  &nbsp;&nbsp;&nbsp; you: ${playerScore}`;
         
         		}else if((computerSelection === "paper") && (playerSelection === "paper")){
         			return ` computer Selected <span class="computer-selection"> ${computerSelection} :</span>  You selected <span class="player-selection"> ${playerSelection} </span>  \nIt was a tie  \n\n
         			Computer: ${computerScore}  &nbsp;&nbsp;&nbsp; you: ${playerScore}`;
         		}else if((computerSelection === "paper") && (playerSelection === "scissors")){
         			playerScore += 1;
         			return ` computer Selected <span class="computer-selection"> ${computerSelection} :</span>  You selected <span class="player-selection"> ${playerSelection} </span>  \nYou win! scissors cuts paper  \n\n
         			Computer: ${computerScore}  &nbsp;&nbsp;&nbsp; you: ${playerScore}`;
         
         		}else if((computerSelection === "scissors") && (playerSelection === "rock")){
         			playerScore += 1;
         			return ` computer Selected <span class="computer-selection"> ${computerSelection} :</span>  You selected <span class="player-selection"> ${playerSelection} </span>  \nYou win! rock crushes scissors  \n\n
         			Computer: ${computerScore}  &nbsp;&nbsp;&nbsp; you: ${playerScore}`;
         
         		}else if((computerSelection === "scissors") && (playerSelection === "paper")){
         			computerScore += 1;
         			return ` computer Selected <span class="computer-selection"> ${computerSelection} :</span>  You selected <span class="player-selection"> ${playerSelection} </span>  \nYou Lose! scissors cuts paper  \n\n
         			Computer: ${computerScore}  &nbsp;&nbsp;&nbsp; you: ${playerScore}`;
         		}else if((computerSelection === "rock") && (playerSelection === "rock")){
         			return ` computer Selected <span class="computer-selection"> ${computerSelection} :</span>  You selected <span class="player-selection"> ${playerSelection} </span>  \nIt was a tie  \n\n
         			Computer: ${computerScore}  &nbsp;&nbsp;&nbsp; you: ${playerScore}`;
         
         		}
         	}
           var gameOptions = document.querySelector('.gameOptions');
            var playRounds = document.querySelector('.playRounds');
           playRounds.innerText = playNumber;
          var playerScoreValue = document.querySelector('.playerScore');
          playerScoreValue.innerText = playerScore;
        
         var computerScoreValue = document.querySelector('.computerScore');
         computerScoreValue.innerText = computerScore;
         
          var replay = document.querySelector('.replayButton');
           replay.addEventListener('click', restartGame);

          var userChoice = Array.from(document.querySelectorAll('.btn-options'));
          userChoice.forEach(key => key.addEventListener('click',game));


            function restartGame(){
                playRounds.innerText = 0;  

               finalResult.style = 'display:none';
                gameOptions.style  = 'display:block';
               resultUpdates.innerHTML = '';
               computerScore = 0;
               playerScore = 0;
               playerChoice = '';
               playNumber = 0;
            }
         
          function changeValues(){
         playRounds.innerText = playNumber;         
          playerScoreValue.innerText = playerScore;        
         computerScoreValue.innerText = computerScore;
          }
         function game(e){
            playNumber++;
             changeValues();

               if(playNumber<5){
                   playerChoice = e.target.textContent;
            var computerResult = computerPlay();
            
             playerChoice = playerChoice.toLowerCase();
            resultAnounced = playRound(playerChoice, computerResult);

           resultUpdates = document.querySelector('.resultUpdates');
            resultUpdates.innerHTML = resultAnounced;
               }else{
                   var winnerPoint = document.querySelector('.winnerPoints');
                  finalResult.style = 'display:block';
                  gameOptions.style  = 'display:none';
                   if (computerScore > playerScore) {
                    
                     winnerPoint.textContent = `computer won with: ${computerScore-playerScore} point(s)`;

         }else if(computerScore< playerScore){
             winnerPoint.textContent = `you  won with: ${playerScore- computerScore} point(s)`;
         }else{
           winnerPoint.textContent = 'it was a tie';
         }
       }

            
                    
    }
   

       


          