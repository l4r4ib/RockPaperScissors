
let comInput = Math.floor(Math.random()*3) +1 

// let comInput = Math.floor(Math.random()*3)+1
// console.log(comInput);

let userScore = 0;
let comScore = 0;
let cCounter = document.querySelector("#Ccounter");
let pCounter = document.querySelector("#Pcounter");
const result = document.querySelector("h2");


// console.log(comInput)
const win = (result) => {
  result.innerText = "YOU WIN!!! CONGRATULATIONS";
  userScore += 1
  pCounter.innerText= userScore
  
  
};
const lose = (result) => {
  result.innerText = "YOU LOSE!! BETTER LUCK NEXT TIME";
  comScore += 1
  cCounter.innerText= comScore
 

};
const draw = (result) => {
  result.innerText = "THE MATCH WAS A DRAW";
  

};

const userInput = document.querySelectorAll(".input").forEach((e) => {
  e.addEventListener("click", (input) => {
    switch (e.alt) {
      case "rock":
        comInput = Math.floor(Math.random()*3) +1 
        if (comInput === 1) draw(result);
        else if (comInput === 2) lose(result);
        else win(result);

        break;

      case "paper":
        comInput = Math.floor(Math.random()*3) +1 
        if (comInput === 2) draw(result);
        else if (comInput === 3) lose(result);
        else win(result);

        break;

      case "scissors":
        comInput = Math.floor(Math.random()*3) +1 
        if (comInput === 3) draw(result);
        else if (comInput === 1) lose(result);
        else win(result);

        break;

      default:
        comInput = Math.floor(Math.random()*3) +1 
        result.innerText = "YOU SOMEHOW TRIGGERED THE DEFAULT STATEMENT";
        break;
    }
  });
});
