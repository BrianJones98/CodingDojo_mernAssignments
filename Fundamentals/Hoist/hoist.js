//? Question 1:

console.log(hello);
var hello = 'world';

/*
    var hello;
    console.log(hello);
    hello = "world";
*/

/*
    Expected output: undefined
    Actual output: undefined
*/

//////////////////////////////////////////////////

//? Question 2:

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

/*
    var needle;

    needle = 'haystack';
    function test(){
        needle = 'magnet';
        console.log(needle);
    }
*/

/*
    Expected output: magnet
    Actual output: magnet
*/

//////////////////////////////////////////////////

//? Question 3:

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

/*
    var brendan;
    brendan = 'super cool';
    function print(){
        brendan = 'only okay';
        console.log(brendan);
    }
    console.log(brendan);
*/

/*
    Expected output: super cool
    Actual output: super cool
*/

//////////////////////////////////////////////////

//? Question 4:

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

/*
    var food;
    function eat(){
        var food;
        food = "half-chicken";
        console.log(food);
        food = "gone";
    }
    
    food = "chicken";

    console.log(food);
    eat();
*/

/*
    Expected output: chicken, half-chicken
    Actual output: chicken, half-chicken
*/

//////////////////////////////////////////////////

//? Question 5:

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);


/*
    var mean;
    
*/

/*
    Expected output: Reference Error - mean not a function
    Actual output: TypeError: mean is not a function
*/

//////////////////////////////////////////////////

//? Question 6:

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

/*
    var genre;
    function rewind(){
        var genre;
        genre = "rock";
        console.log(genre);
        genre = "r&b";
        console.log(genre);
    }

    genre = "disco";
    rewind();
    console.log(genre);
*/

/*
    Expected output: rock, r&b, r&b
    Actual output: rock, r&b, disco
*/

//////////////////////////////////////////////////

//? Question 7:

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

/*
    function learn(){
        var dojo;
        dojo = "seattle";
        console.log(dojo);
        dojo = "burbank";
        console.log(dojo);
    }

*/

/*
    Expected output: Reference error - dojo is not defined
    Actual output: san jose, seattle, burbank, san jose
*/

//////////////////////////////////////////////////

//? Question 8:

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

/*
    function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            
        }
    }
*/

/*
    Expected output: type error(line 221) - dojo is read only
    Actual output: TypeError: Assignment to constant variable.
*/