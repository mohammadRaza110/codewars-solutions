/*
In this kata, your task is to implement an extended version of the famous rock-paper-scissors game. The rules are as follows:

Scissors cuts Paper
Paper covers Rock
Rock crushes Lizard
Lizard poisons Spock
Spock smashes Scissors
Scissors decapitates Lizard
Lizard eats Paper
Paper disproves Spock
Spock vaporizes Rock
Rock crushes Scissors
Task:
Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".

Inputs
Values will be given as one of "rock", "paper", "scissors", "lizard", "spock".

https://www.codewars.com/kata/57d29ccda56edb4187000052

*/

function rpsls(player1, player2) {
  // Define the rules of the game
  const rules = {
    scissors: ["paper", "lizard"],
    paper: ["rock", "spock"],
    rock: ["lizard", "scissors"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"],
  };

  // Check if it's a draw
  if (player1 === player2) {
    return "Draw!";
  }

  // Check if Player 1 wins
  if (rules[player1].includes(player2)) {
    return "Player 1 Won!";
  }

  // If neither of the above conditions are true, Player 2 wins
  return "Player 2 Won!";
}
