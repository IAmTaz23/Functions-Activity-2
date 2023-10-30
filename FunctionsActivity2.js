//1. Create a function that takes a string as a parameter. If the string is equal to ping log pong to the console.
console.log("Question1:")
function favGame(game) {
    if(game === "ping") {
        console.log("Pong ")
    }
}
favGame("ping")
//2. Create a function that takes in a number. Console log that number squared 
console.log("Question2:")

const squareNumber = (number) => number * number
console.log(squareNumber(8))
console.log(squareNumber(12))

//3. Create a function that console logs every number from 1-20
console.log("Question3:")
function listNumber() {
    for (let i = 1; i <= 20; i++) {
        console.log(i);
      }
    }
listNumber()


//4. Create a function that console logs every odd number from 1-20
console.log("Question4:")
function oddNumbers() {
  for (let i = 1; i <= 20; i++){
    if (i % 2 != 0)
      console.log(i)
  }
    
}
oddNumbers()

//5.   Create a function that takes a number as a parameter. Console log every number from 1 to that number.
console.log("Question5:")
function countNumber(number) {
   for (let i = 1; i <= number; i++){
        console.log(i)
   }
}
countNumber(6)