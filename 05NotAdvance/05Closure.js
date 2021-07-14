function init() {
    var firstName = "Ola";
    function sayFirstName() {
        console.log(firstName);
    }
    return sayFirstName;
}

var value = init();

value();

function doAddition(x) {
    return function (y) {
        return x + y;
    }
}

var add5 = doAddition(4);
console.log(add5(5));

console.log(doAddition(5)(4)); // curring