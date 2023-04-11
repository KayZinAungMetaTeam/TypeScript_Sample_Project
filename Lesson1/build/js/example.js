"use strict";
let stringArr = ['one', 'tow', 'three'];
let guitars = ['Start', 'les paul', 5120];
let mixedData = ['EVH', 1984, true];
stringArr[0] = "John";
stringArr.push("hey");
guitars[0] = 1988;
guitars.unshift('Jimmy');
let test = [];
let bands = [];
bands.push('Halen');
// Tuple
let myTuple = ['Kayzin', 29, true];
let mixed = ['john', 1, false];
myTuple[1] = 42;
// Object
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    props1: 'Dave',
    props2: true,
};
exampleObj.props1 = 'John';
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5151, 'OU812']
};
let jp = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'AAAA']
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return `Hello!`;
};
console.log(greetGuitarist(jp));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
