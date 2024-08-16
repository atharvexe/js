const name ="Ayush"
const repoCount = 90

//console.log(name + repoCount + "Value")

console.log(`Hello my name  is ${name} and my repo count is ${repoCount}`); //string manipulation and we can do many more

const gameName = new String('Ayush-t')

// console.log(gameName.lenght);
// console.log(gameName.toUpperCase);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('h'));

// const newString = gameName.substring(0,4)
// console.log(newString);

// const anotherString = gameName.slice(-6,4);  //in slice we can give (-)gative values but not in strings
// console.log(anotherString)

const newStringOne = " ayush "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://ayush.com/ayu%20sh"
console.log(url.replace('%20','-'))
console.log(url.includes('ayush'))
console.log(url.includes('ty'))
console.log(gameName.split('-'))