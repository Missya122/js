var user = {
    firstName : "Ola",
    lastName : "Pawelec",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true
};

console.log(user.firstName, user.lastName);

user.loginCount = 44;
console.table(user);
