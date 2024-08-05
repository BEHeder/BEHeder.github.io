/***************************************
 * main.cpp
 * Author: Bryan Heder
 * Summary: Contains what the user sees,
 *          as well as calling the functions.
 **************************************/

#include <iostream>
#include "rps.h"

int main() {
    // Initialize variables
    std::string choice;
    bool isValid = false;
    std::string compChoice;

    // Play loop
    while (choice != "close") {
        std::cout << "Choose rock, paper, scissors, or close: ";
        std::cin >> choice;
        isValid = validateChoice(choice);

        // Make sure user input is valid for the game
        while (!isValid) {
            std::cout << "Invalid input. Choose rock, paper, scissors, or close: ";
            std::cin >> choice;
            isValid = validateChoice(choice);
        }
        
        // Get out if the player wishes to close the game
        if (choice == "close") {
            break;
        }

        // Resolve this round of Rock, Paper, Scissors
        std::cout << "You chose: " << choice << std::endl;
        compChoice = compChoose();
        std::cout << "Computer chose: " << compChoice << std::endl;
        std::cout << resolveRound(choice, compChoice) << std::endl;
    }

    std::cout << "Thank you for playing!" << std::endl;
    return 0;
}