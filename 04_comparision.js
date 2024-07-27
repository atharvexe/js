// console.log(2>1)

// console.log("2">1)
// console.log("02">1)

console.log(null>0)
console.log(null>=0)
//the reason is that an equality check == and comparisons > < >= <= works differntly.
//Comparisons convert null to a number, treating it as 0.
//That's why (3) null >= 0 is true and (1) null > 0 is false.


console.log("2"===2)

const heros = ["shaktiman","doga"]
let myObj = {
    name: "Atharv",
    age: 22,
}
    const myFunction =function(){
        console.log("gda")
    }
console.log(typeof myFunction)
