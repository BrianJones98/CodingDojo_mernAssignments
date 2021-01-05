//? Question 1:

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

/*
    Predicted: Tesla, Mercades
    Actual: Tesla, Mercades
*/

//? Question 2:

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);


/*
    Predicted: undefined, Elon
    Actual: ReferenceError: name is not defined
*/

//? Question 3:

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);


/*
    Predicted: 12345, ReferenceError: no property called password on person
    Actual: 12345, undefined
*/

//? Question 4:

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);


/*
    Predicted: false, true
    Actual: false, true
*/

//? Question 5:

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);


/*
    Predicted: value, [1, 5, 1, 8, 3, 3], 1, ReferenceError: secondKey not defined
    Actual: value, [ 1, 5, 1, 8, 3, 3 ], 1, 5
*/