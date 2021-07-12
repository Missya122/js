const names = [
    "Youtube",
    "Facebook",
    "Instagram",
    "Netflix",
    "Amazon"
];

for (const n of names) {
    console.log(n);
}

const symbols = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook",
    lco: "LearnCodeOnline"
}

for (const n in symbols) {
    console.log(`Key is ${n} and value is ${symbols[n]}.` );
}