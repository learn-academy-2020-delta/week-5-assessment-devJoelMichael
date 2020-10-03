// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
console.log("FIRST: \n")

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

// first create a function that will take in a string
// the string will need to be broken down into letters (probably use split("") and maybe at some point slice(""))
// use a method, either for loop or map or filter, to look through the broken up string (each letter at a time) and find all the vowels
// Once the method has run and we find all the vowels we need to replace those vowels with their corresponding numbers (probably an if/else if statement or that one with : ? )
// const shhItsASecret = (string) => {
//   let newStringArray = string.split("");
//   newStringArray.filter(letter => {
    //     for (i = 0; i < letter.length; i++) {
    // if (letter[i] === "a") {
      //         letter.splice([i], 1); i--;
      //       } else if (letter[i] === "e") {
      //         letter.splice([i], 1);i--;
      //       } else if (letter[i] === "i") {
      //         letter.splice([i], 1);i--;
      //       } else if (letter[i] === "o") {
      //         letter.splice([i], 1);i--;
      //       } else if (letter[i] === "u") {
      //         letter.splice([i], 1);i--;
      //       } else {
      //         return "No Vowels"
      //       }
      // return breakItUp.join(""
//     }
//   });
// }


// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.
console.log("SECOND: \n")

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

const sweetAzz = (array) => {
  if (array.toString() === array.includes("a")) {
    return array.join("")
  } else if (array.toString() !== array.toString().includes("a")) {
    return []
  } else {
    return "who dares disturb my slumber?"
  }
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

