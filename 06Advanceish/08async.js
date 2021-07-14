const uno = () => {
    console.log("I am the one");
};

const dos = () => {
    setTimeout(() => {
        console.log("Woohoo");
    }, 3000);
    console.log("I am the two");

};

const tres = () => {
    console.log("I am the three");
};

uno();
dos();
tres();

