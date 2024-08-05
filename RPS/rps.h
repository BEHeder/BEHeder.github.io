/***************************************
 * Header: RPS, or Rock Paper Scissors
 * Author: Bryan Heder
 * Summary: Contains functions to help
 *          facilitate the game.
 **************************************/

#ifndef RPS_H
#define RPS_H

bool validateChoice(std::string play) {
    if (play == "rock" || play == "paper" || play == "scissors" || play == "close") {
        return true;
    }
    else {
        return false;
    }
}

std::string compChoose() {
    std::string compChoice[3] = {"rock", "paper", "scissors"};
    srand(time(NULL));
    return compChoice[rand() % 3];
}

std::string resolveRound(std::string choice, std::string compChoice) {
    if (choice == compChoice) {
        return "It's a tie!";
    }
    else if ((choice == "rock" && compChoice == "paper") || 
            (choice == "paper" && compChoice == "scissors") || 
            (choice == "scissors" && compChoice == "rock")) {
                return "Better luck next time!";
            }
    else {
        return "You're the winner!";
    }
}

#endif