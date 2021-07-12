const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");
const square = document.querySelector(".square");


// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}


// var color = getBGColor(pink);

// pink.addEventListener('click', () => {
//     center.style.background = color;
// });

const magicColorChanger = (element, color) => {

    return element.addEventListener('mouseenter', () => {
        center.style.background = color;
    });
}

magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(violet, getBGColor(violet));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(pink, getBGColor(pink));

const squareColorChanger = (element, color) => {

    return element.addEventListener('click', () => {
        square.style.background = color;
    })
}

squareColorChanger(red, getBGColor(red));
squareColorChanger(cyan, getBGColor(cyan));
squareColorChanger(violet, getBGColor(violet));
squareColorChanger(orange, getBGColor(orange));
squareColorChanger(pink, getBGColor(pink));
