const names = ['Tom','Lime','Sam','Lukas']

//names.push('Lime')
//console.log ('Names:', names,name)

// const name = name.shift()
// const name = name.pop()

// console.log(names.reverse())
// const reversed = names.toReversed()

// const letters = ['s','r','g','w','f']
// console.log(
//     letters.sort(function (a,b) {
//     return a-b
// })
// )
// console.log(letters)

// //console.log(names.splice(1,2))
// console.log(names.toSpliced(1,2))
// console.log(names)

// const greatMan = 'Sam'
// const index = names.indexOf(greatMan)
// //console.log (index)
// //console.log (names[index])
// const newNames =names.with (index, 'Sam Willons')
// // console.log (names)
// // console.log (newNames)


// // const capitalNames = names.map (function(name){
// //        return name.toUpperCase()
// // })
// // console.log(capitalNames)


// // const capitalNames = names.map (function(name,index){
// //     if (index ===){
// //         return  'Sam Willons'
// //     }
// //     return name

// // })
// // console.log(capitalNames)

// console.log( names.includes('Tom'))



const people = [
    { name: 'Salla' , budget: 5000},
    { name: 'Tommy' , budget: 1000},
    { name: 'Beral' , budget: 560},
    { name: 'Mysma' , budget: 1200},
    { name: 'Nula' , budget: 9200},
    { name: 'Enisha' , budget: 2200},
    { name: 'Kutor' , budget: 200},
]
//1 variant
// let findedPerson
// for (let person of people){
//     if (person.budget === 2000){
//         findedPerson = person
//     }
// }
// console.log(findedPerson)


////2 variant

// const findedPerson = people.find (function(person){
//     if (person.budget === 1200){
//         return true
//     }
// })

//  console.log(findedPerson)

//3 variant

//  const findedPerson = people.find (function(person){
//     return person.budget === 1200
// })
//  console.log(findedPerson)

//  //4 variant
//  const finded = people.find((p) => p.budget === 1200)
//  console.log(finded)

// const filtered = people.filter(function(p){
//     return p.budget >= 2000
// })
// console.log(filtered)


//1 variant
// let sumBudget =0
// const filtered = people.filter(function(p){
//     return p.budget >= 2000
// })
// console.log(filtered)
// filtered.forEach(function(p){
//     sumBudget = sumBudget+ p.budget
// })
// console.log(sumBudget)


////2 variant
// const sumBudget = people
//     .filter((p) => p.budget >3000 )
//     .map((p) => p.budget)
//     .reduce((acc,p) => acc + p, 0)

//  console.log(sumBudget)

 ////2.1 variant
//  const byBudget = (p) => p.budget > 5000
//  const pickBudget = (p) => p.budget 
//  const sumBudget = people
//     .filter(byBudget)
//     .map(pickBudget)
//     .reduce((acc,p) => acc + p, 0)
    
//  console.log(sumBudget)


const string = 'Hallo meine liebe'

const reversed = string.split('').toReversed().join('')
console.log(reversed)