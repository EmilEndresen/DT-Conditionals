console.log("Hello world")

let x = 11

// Her sjekker vi om x = 10 ved å bruke == (compare)
if (x == 10) {
   // Om dette stemmer så consoll logger vi true
   console.log("true")
} else if (x == 11) {
   // Om det ikke stemmer og x = 11 så consoll logger vi x = 11
   console.log("x = 11")
} else {
   // Om ikke x = noen av de gitte verdiene så consoll logger vi false
   console.log("false")
}

//Ternary

let age = 11

// Vi kan også "forenkle" dette ved å bruke en ternary,
// dette lar oss skrive alt på en linje, og vil være ryddigere, men også vanskeligere å lese.
// Vi spør først om alder er større eller lik 18? Om det stemmer consoll logger vi Legal,
// vist ikke det stemmer så consoll logger vi Illegal.
// Her symboliserer : else
age >= 18 ? console.log("Legal") : console.log("Illegal")

let drink = age >= 18 ? "øl" : "saft"

console.log(drink)

let userAge = 19
let userName = ""
let pet = true

// En conditional kan sjekke om flere statements stemmer ved at vi bruker &&
if (!userName && userAge >= 18) {
   console.log("User has a name and is over 18")

   // Vi kan også legge til en conditional inne i andre conditionals, men dette blir fort rotete,
   // og vi anbefaller at man er litt forsiktig med hvor langt man drar dette
   if (pet == true) {
      console.log("Hell yeah")
   } else "Hell no!"
} else {
   console.log(
      "User does not have a name or is under 18, or doesn't have a pet"
   )
}
