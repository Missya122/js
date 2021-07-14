// var returnedValue = Math.max(2, 5, 7, 4, 2, 9, 8);

// console.log(returnedValue);

// var myObj = {}

// Object.assign(myObj, {a:1, b:2, c:3}, {z:9, y:8, x=7});

// console.log(myObj);

function sumOne(a,b) {
    return a+b;
}

var myA = [
    5,
    4
];

console.log(sumOne(...myA)); // spread

function sumTwo(a, b,...args) {
    console.log(args);
    let multi = a * b;
    let sum = 0;
    for (const arg of args) {
        sum = sum + arg;
    }

    return [sum, multi];
}

console.log(sumTwo(1,2,3,4,5));