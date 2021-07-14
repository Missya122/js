const User = require("./06class");

// import User from "./06class";

const ola = new User("ola", "olapawelec13@gmail.com");

console.log(ola.getInfo());

ola.enrollCourse("React Bootcamp");
ola.enrollCourse("Angular Bootcamp");


let courses = ola.getCourseList();

console.log(`The coursant's name is: ${ola.getInfo().name} and their e-mail is: ${ola.getInfo().email}.`);
console.log(`They are enrolled for total of ${courses.length} courses which are: `);
courses.forEach(c => console.log(c));

