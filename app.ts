import inquirer from "inquirer";
import chalk from "chalk"

let alienColor = await inquirer.prompt({

    name : "Color",
    type : "list",
    message :"What is the color of your Alien?",
    choices: ["Red", "Green","Yellow","White","Blue"]

})

function pointCalculation(alien : string) : number {
    if (alien === "Green"){
        return 5;
    } else if (alien === "Red"){
        return 10;
    } else if (alien === "Yellow"){
        return 15;
    }else {
        return 0;
    }
}

let points = pointCalculation(alienColor.Color);

console.log(chalk.bgWhite.blueBright.bold(`You earned ${points} points for ${alienColor.Color} color alien.`));