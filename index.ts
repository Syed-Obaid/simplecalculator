import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter firstnumber", type: "number", name: "firstnumber" },
  { message: "Enter Secondnumber", type: "number", name: "secondnumber" },
  {
    message: "Enter Operator",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "division"],
  },
]);

// Conditional Statement

if (answer.operator === "Addition") {
  console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstnumber * answer.secondnumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstnumber / answer.secondnumber);
} else {
  console.log("Enter right operator");
}
