const uno = () => {
    return "I am the one";
};

// const dos =  () => {
//     setTimeout(() => {
//         return "I am two";
//     }, 3000);
    

// };

const dos = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I am the two");
        }, 3000);
    });
};

const tres = () => {
   return "I am the three";
};

const callMe = async () => {
    let valOne = uno();
    console.log(valOne);

    let valTwo = await dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
}

callMe();