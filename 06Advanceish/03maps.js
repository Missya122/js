var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "Dos");
myMap.set(3, "Tres");
myMap.set(4, "Quatro");

console.log(myMap);

// for (let key of myMap.keys()) {
//     console.log(`Key is ${key}`);
// }

// for (let value of myMap.values()) {
//     console.log(`Value is ${value}`);
// }

for (let [key, value] of myMap) {
    console.log(`Key is ${key} and value is ${value}`);
}

myMap.forEach( (value, key) => console.log(`${value} and key is ${key}`));

myMap.delete(2);

console.log(myMap);

