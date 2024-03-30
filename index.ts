#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const Mymsg =
  "                                                        Muzammil's Number Guessing game                        ";
chalkAnimation.rainbow(Mymsg);
setTimeout(() => {
  console.log(chalk.bgGreen("Guess a number between 1 to 10"));
}, 7000);
const random = Math.floor(Math.random() * 10 + 1);
let flag = true;

while (flag) {
  const answer = await inquirer.prompt([
    {
      name: "userGuessedNumber",
      type: "number",
      message: "Your Number",
    },
  ]);

  if (answer.userGuessedNumber > 10) {
    console.log(chalk.bgRed("Invalid number"));
    flag = false;
  } else if (answer.userGuessedNumber < 0) {
    console.log(chalk.bgRed("Invalid number"));
    flag = false;
  } else if (answer.userGuessedNumber === random) {
    console.log(chalk.greenBright("Nice Guess!!"));
    flag = false;
  } else {
    console.log(chalk.redBright("You guessed a wrong number."));
  }
}
