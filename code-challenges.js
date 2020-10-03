// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
console.log("FIRST: \n")

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

const cssr = (array) => {
  return array.filter(vowel => {
    vowel.split("")
    if (vowel.toLowerCase().includes("a")) {
      return vowel.replace("a", 4)
    } else if (vowel.toLowerCase().includes("e")) {
      return vowel.replace("e", 3)
    } else if (vowel.toLowerCase().includes("i")) {
      return vowel.replace("i", 3)
    } else if (vowel.toLowerCase().includes("o")) {
      return vowel.replace("o", 0)
    } else {
      return "NOT FOR YOU AMERICAN SCUM!"
    }
  })
}

console.log(cssr(secretCodeWord1), "\n")
console.log(cssr(secretCodeWord2),"\n")


// first create a function that will take in a string
// the string will need to be broken down into letters (probably use split("") and maybe at some point slice(""))
// use a method, either for loop or map or filter, to look through the broken up string (each letter at a time) and find all the vowels
// Once the method has run and we find all the vowels we need to replace those vowels with their corresponding numbers (probably an if/else if statement or that one with : ? )


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
    // console.log("2:, \n", aze)
    if (word.toLowerCase().includes("a") || word.toUpperCase().includes("A")) {
      // console.log("3:, \n", word)
      return word
    } else if (word.toLowerCase().includes(!"a") || word.toUpperCase().includes(!"A")) {
      return;
    }
  }) 
} 

console.log(sweetAzz(arrayOfWords))



// use a method, either for loop or map or filter, to look through the broken up string (each letter at a time) and find all the vowels
// Once the method has run and we find all the vowels we need to replace those vowels with their corresponding numbers (probably an if/else if statement or that one with : ? )

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

// first we build a function * i bet you love reading that three times lol *
// then we will use this function to see wether the array has a "full house". 
// to do this we will make a method that checks if there is 3 of a character and 2 of a character, if this is the case we get true. If this is not the case we get false. (if / else).

