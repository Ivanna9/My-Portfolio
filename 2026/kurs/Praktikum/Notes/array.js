const names = ["Glusio", "Kellay", "Toppo", "Wanuly",'Yalisa' ];
// names.push("Glusio");
// names.unshift("Glusio");

// const firstName = names.shift();
// const firstName = names.pop();
// console.log("Names: ", names, firstName);

// console.log(names.reverse());
// console.log(names.toReversed());
// console.log(names);

// const letters = ["e", "h", "g", "l", "a"];
// console.log(letters.sort());
// console.log(letters.pop());
// console.log(letters.toSorted());
// console.log(letters)

// // console.log(names.splice(2,4));
// console.log(names.toSpliced(0,2));
// console.log(names);

const greateWoman ='Yalisa'
const index= names.indexOf(greateWoman);
// console.log(index);
// console.log(names[index])
// console.log(names)
const newNames = names.with(index, "Yalisa Jonnare");
// console.log(names);
// console.log(newNames);
const capitalNames = names.map( function(name, index){
// const newName= name+ '!'
// return name.toUpperCase()
// return name.toLowerCase()
if (index === 1){ return "Yalisa Jonnare"
}
return name
})
console.log(capitalNames)
console.log(names.includes)