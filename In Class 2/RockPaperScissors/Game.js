var person = prompt("Paper, Rock, Scissors?: ");
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
var computer = getRandomInt(0,3);
if (person == "paper"){
    person = 0;}
else if (person == "rock"){
    person = 1;}
else
{
    person = 2;}
if (person == 0 && computer == 1){
    alert ("You win!");}
else if (person == 0 && computer == 2){
    alert ("You lose.");}
else if (person == 1 && computer == 0){
    alert ("You lose.");}
else if (person == 1 && computer == 2){
    alert ("You win!");}
else if (person == 2 && computer == 0){
    alert ("You win!");}
else if (person == 2 && computer == 1){
    alert ("You lose.");}
else{
    alert("You tied!");}