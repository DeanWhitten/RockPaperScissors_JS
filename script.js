
let still_playing = 1 ;                                             
let player_score = 0;                                              
let computer_score = 0;   

let rock_btn = document.getElementById("rock_btn");
rock_btn.addEventListener('click', () => {
    game('rock');
});

let paper_btn = document.getElementById("paper_btn");
paper_btn.addEventListener('click', () => {
     game('paper');
});

let scissors_btn = document.getElementById("scissors_btn");
scissors_btn.addEventListener('click', () => {
    game('scissors');
});

let start = document.getElementById("start_button");
start.addEventListener("click", () =>{
    startGame();
});

function startGame(){
    let startScreen = document.getElementById("start");
    startScreen.style.visibility = "hidden";
    
}

function game(user_selection){


let computer_selection = computerPlay();
playround(computer_selection, user_selection);

function computerPlay(){
    // Generates a number between 1 and 3
    let selection = Math.floor(Math.random() * 3) + 1;
    // Assigns the numbers 1-3 to a selection
    if(selection == 1 ){
        return('rock');
    } else if( selection == 2){
        return('paper');
    } else {
        return('scissors');
    }
}



function playround(c_Choice, u_choice){
    let p_Selection = document.getElementById("p-selection");
    let c_Selection = document.getElementById("c-selection");
    p_Selection.innerHTML = u_choice;
    c_Selection.innerHTML = c_Choice;
    
    let msg = document.getElementById("msg");
    // Compares selections to determine round winner
    if(c_Choice == u_choice){
        running_score();
        msg.innerHTML= "ITS A TIE!";
    } else if( u_choice == 'rock'){
        if(c_Choice == "paper"){
            ++computer_score;           
            msg.innerHTML = "Rock loses to Paper!"; 
        } else{
            ++player_score;            
            msg.innerHTML = "Rock beats Scissors! ";
        }
        running_score();
        ++still_playing;
    } else if (u_choice == 'paper'){
        if(c_Choice == 'rock'){
            ++player_score;
            msg.innerHTML ="Paper beats Rock! ";
        }else{
            ++computer_score;
            msg.innerHTML = "Paper loses to Scissors!";
        }
        running_score();
        ++still_playing;
    } else if(u_choice == 'scissors'){
        if (c_Choice == 'rock'){
            ++computer_score;
            msg.innerHTML = "Scissors loses to rock!";
        }else{
            ++player_score;
            msg.innerHTML ="Scissors beats Paper!";
        }
        running_score();
        ++still_playing;
    }else{
        //Filters anything that isn't rock paper or scissors
        alert("ERROR! Enter rock paper or scissors!");
    }    


   // Ends game after 5th round, declares winner, and prompts user for another game
/*    if(still_playing == 6){
        // Figures out who won and displays it through function
        declareWinner(computer_score, player_score);       
        //Prompts user for another game
        let playagain = prompt("Would you like to play again? ('y' or 'yes' for yes)");   
        let restart = playagain.toLowerCase();       
        // Checks user input
        if(restart == "yes" || restart == "y"){
            // Calls the main function, causing the game to restart
            game();
        } else{
            console.log("GOOD GAME, GOOD BYE!")
        }

    }*/
}



// Console logs running score after each round
function running_score(){
    let round = document.getElementById("round");
    let p_score = document.getElementById("Player_Score");
    let c_score = document.getElementById("Computer_Score");
    
    round.innerHTML = still_playing;
    p_score.innerHTML = player_score;
    c_score.innerHTML = computer_score;
}

// Determines and Displays winner.
function declareWinner(computer_score, player_score){
    if( computer_score > player_score){
        console.log(" ");
        console.log("THE COMPUTER WINS :(")
    }else{
        console.log(" ");
        console.log("YOU WON!!!!!!")
    }
}
}
