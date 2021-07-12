var user = {
    firstName : "Ola",
    lastName : "Pawelec",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function(courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount : function() {
        return `${this.firstName} is enrolled in total of  ${this.courseList.length} courses`;
    },
    info : function(){
        return console.log("\nUser's name: ", this.firstName, this.lastName,
         "\nUser's role:", this.role, "\nUser's login count: ",
          this.loginCount, "\nIs user signed with Facebook:", this.facebookSignedIn,
         "\nUser's courses: ", this.courseList);
    }
};


user.buyCourse("React JS Course");


user.buyCourse("Angular course");

console.log(user.getCourseCount());

user.info();
