var User = {
    name: "",
    getUserName: function () {
        console.log(`User name is ${this.name}`);
    },
};

var ola = Object.create(User);
console.log(ola);

ola.name = "Ola P";
ola.getUserName();

var sam = Object.create(User, {
    name: { value: "sam"},
    
})