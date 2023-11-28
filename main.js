console.log("Hello world")

let x = 11

if (x == 10) {
   console.log("true")
} else if (x == 11) {
   console.log("x = 11")
} else {
   console.log("false")
}

//Ternary

let age = 11

age >= 18 ? console.log("Legal") : console.log("Illegal")

let drink = age >= 18 ? "øl" : "saft"

console.log(drink)

let userAge = 19
let userName = ""
let pet = true

if (!userName && userAge >= 18) {
   console.log("User has a name and is over 18")
   if (pet == true) {
      console.log("Hell yeah")
   } else "Hell no!"
} else {
   console.log(
      "User does not have a name or is under 18, or doesn't have a pet"
   )
}
