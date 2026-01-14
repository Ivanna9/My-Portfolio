const person = {
    name: 'Sanaly',
    age : 13,
    sex : 'man',
    language : ['ru','en'],
    address: {
        city: 'Kiev',
        street : ' Nevcky',
    },
    'complex key':'complex value',
    ['key_'+2*8]:'computed value',
    greet() {
        console.log('Greet from person',this)
    },
    arrow: () => {
        console.log ('Person arrow',this)
    },
    info (){
        console.log('Person name', this.name)
    },
}
//  console.log(person.address)
// const addressKey = 'address'
// console.log(person[addressKey])
// console.log(person['complex key'])

// person.age++
// person.language.push('de')
// console.log(person.language)


//person.address = undefined удаление но неправильное
//delete person.address

//console.log(person)


//destructoring
// const age = person.age
// const name = person.name
// const language = person.language

// const name = 'Pert'
// const{ age ,name: firstName = 'Test', language} = person

// console.log(language,age,firstName)

//console.log ([1,2])

//робить перевырку щоб воно не брало Prototype
// for (let key in person) {
//  if (person.hasOwnProperty(key)) {
//     console.log(person[key])
//     }
//  }

//1v
// const keys= Object.keys(person)
// console.log(keys)

//v2
// Object.keys(person).forEach((key) => {
//     console.log(person[key])
// })

const logger = {
    keys() {
        console.log('Object keys',Object.keys(this))
    },

    keysAndValues (){
        Object.keys(this).forEach((key) => {
                console.log('Key:',key)
                console.log('Value:',this[key])

        })
    },
}
//  const bound = logger.keys.bind(person)
//  bound()

// logger.keys.call(person)
// logger.keys.apply(person)

//class

class Human {
    isHuman = true

    humanGreet(){
        console.log('greet from human')
    }
    toString(){
        console.log('toString')
    }
  }

class Person  extends Human{
    constructor (name,age){
        super()
        this.name= name ?? 'Undefined name'
        this.age = age  ?? 'Undefined age'
    }
    sayHello() {
        console.log('Hello from', this.name)

    }
}

const person1 = new Person ('Vladilen',30)
const person2 = new Person ('Vlad',22)

console.log (Person.isHuman)
