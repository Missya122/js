var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;

setInterval(() => {
    if (count < 1000) {
        count++;
        counter.innerText = count;
    }
}, 1);

setTimeout(() => {
    followers.innerText = "Followers on Instagram";
}, 5000);

// var counter = document.getElementsByClassName(".counter");
// var followers = document.getElementsByClassName(".followers");

// var count = 0;

// setInterval(() => {
//     if( count < 1000 ){
//         count++;
//         counter.innerText = count;
//     }
// }, 1000);

// setTimeout(() => {
//     followers.innerText = "Zmiana!";
// }, 3000);