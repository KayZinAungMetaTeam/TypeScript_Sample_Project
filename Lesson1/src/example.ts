let stringArr = ['one', 'tow', 'three'];

let guitars = ['Start', 'les paul', 5120];

let mixedData = ['EVH', 1984, true];

stringArr[0] = "John";
stringArr.push("hey");

guitars[0] = 1988;
guitars.unshift('Jimmy');

let test = [];
let bands: string[] = [];
bands.push('Halen')

// Tuple
let myTuple: [string, number, boolean] = ['Kayzin', 29, true]

let mixed = ['john', 1, false]

myTuple[1] = 42

// Object
let myObj: object
myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {
    props1 : 'Dave',
    props2 : true,
}

exampleObj.props1 = 'John'

interface Guitarist {
    name?: string,
    active: boolean,
    albums : (string | number)[]
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5151, 'OU812']
}

let jp: Guitarist = {
    name: 'Jimmy',
    active: true,
    albums: ['I','II','AAAA']
}

const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`
    }
    return `Hello!`
}

console.log(greetGuitarist(jp))

// Enums
enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}

console.log(Grade.U)
