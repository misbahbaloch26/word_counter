import inquirer from "inquirer";
import chalk from "chalk";
//a colourfull wellcome messege for display
console.log(chalk.bold.cyanBright(" \n\t\twellcome to word-counter by misbah"));
console.log("=".repeat(70));
//prompt for user to enter a sentence
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "please enter a sentence to count:\t"
    }
]);
//triming the sentence and spliting it into words based on spaces
let words = answer.sentence.trim().split(" ");
console.log("sentence words:");
console.log(words);
//console.log(`your sentence word count is ${chalk.bold.redBright(words.length)}`);
console.log(chalk.bold(`\n - your sentence word count is ${chalk.bold.redBright(words.length)} `));
