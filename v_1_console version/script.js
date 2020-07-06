
// Main function for the game
function game(){

let still_playing = 1 ;                                             // Keeps track of round
let player_score = 0;                                               // Stores player score
let computer_score = 0;                                             // Stores computer score


// Keeps game to 5 rounds
while(still_playing < 6 ){

    let userSelection = prompt("Select rock, paper, or scissors:");
    let next_play = computerPlay();

    // Converts user input to lower case so that no errors arise from casing
    let user_Choice = userSelection.toLowerCase();

    playround(next_play, user_Choice); 
}

// Generates the computer selection
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
    // Compares selections to determine round winner
    if(c_Choice == u_choice){
        
        running_score();
        alert("ITS A TIE!");


    } else if( u_choice == 'rock'){
       

        if(c_Choice == "Paper"){
            ++computer_score;
            
            alert("Rock loses to Paper!"); 
        } else{
            ++player_score;
            
            alert("Rock beats Scissors! ");
        }
        running_score();
        ++still_playing;
        

    } else if (u_choice == 'paper'){

        if(c_Choice == 'rock'){
            ++player_score;
            alert("Paper beats Rock! ");
        }else{
            ++computer_score;
            alert("Paper loses to Scissors!");
        }
        running_score();
        ++still_playing;

    } else if(u_choice == 'scissors'){

        if (c_Choice == 'rock'){
            ++computer_score;
            alert("Scissors loses to rock!");
        }else{
            ++player_score;
            alert("Scissors beats Paper!");
        }
        running_score();
        ++still_playing;

    }else{
        //Filters anything that isn't rock paper or scissors
        alert("ERROR! Enter rock paper or scissors!");
    }

    
    // Ends game after 5th round, declares winner, and prompts user for another game
    if(still_playing == 6){

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
    }
}



// Console logs running score after each round
function running_score(){
    console.log("ROUND: " + still_playing );
    console.log("SCORE:");
    console.log("Computer: " + computer_score );
    console.log("Player: " + player_score );
    console.log(" ");
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

game();