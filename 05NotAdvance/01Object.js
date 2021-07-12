var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getFirstname = function () {
        console.log(`User's name is ${this.firstName}`);
    };
    this.getCourseCount = function () {
        console.log(`Course count is ${this.courseCount}`);
    };

};

var ola = new User("Ola", 2);

if (ola.hasOwnProperty("firstName")) {
    ola.getFirstname();
}

ola.getCourseCount();


var sam = new User("Sam", 1);
