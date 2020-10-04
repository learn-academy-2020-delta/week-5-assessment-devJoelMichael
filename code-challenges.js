// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

console.log("FIRST: \n")

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

// ########################### ORIGINAL ##################################

const cssr = (str) => {
  console.log("What is str:", str)
  return str
    .split("") //. chaining 
    .map(letter => {
      if (letter === 'a') {
        return '4'
      } else if (letter === 'e') {
        return '3'
      } else if (letter === 'i') {
        return '1'
      } else if (letter === 'o') {
        return '0'
      } else {
        return letter
      }
    })
    .join("")
  // return arr.map = arr.join("")
}
console.log("part1: \n")
console.log("answer:", cssr(secretCodeWord1), "\n")
console.log("answer:", cssr(secretCodeWord2), "\n")

// ############ CONDENSED VERSION ####################

const cssrz = (str) => {
  console.log("What is str:", str)
  return str.replace(/\a/g, '4')
    .replace(/\e/g, '3')
    .replace(/\i/g, '1')
    .replace(/\o/g, '0')
}
console.log("part2: \n")
console.log("answer:", cssrz(secretCodeWord1), "\n")
console.log("answer:", cssrz(secretCodeWord2), "\n")


// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.
console.log("SECOND: \n")

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

// first create a function that will take in a string
const sweetAzz = (array) => {
  // use a filter to sort through the array
  return array.filter(word => {
    // console.log("1:, \n", word)
    word.split("")
    if (word.toLowerCase().includes("a") || word.toUpperCase().includes("A")) {
      // console.log("3:, \n", word)
      return true
    } else if (word.toLowerCase().includes(!"a") || word.toUpperCase().includes(!"A")) {
      return false
    }
  }) 
} 

console.log(sweetAzz(arrayOfWords))


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.
console.log("THIRD: \n")

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

const fullHouse = (cards) => {
  for (let i = 0; i < cards.length; i++) {
    // console.log(cards)
    if (cards[0] === cards[1] && cards[1] === cards[2] && cards.length >= 3
      && cards[3] === cards[4]) {
      // console.log(cards)
      return "true"
    } else {
      return "false"
    }
  }
}
console.log(fullHouse(hand1), "\n")
console.log(fullHouse(hand2), "\n")
console.log(fullHouse(hand3), "\n")


