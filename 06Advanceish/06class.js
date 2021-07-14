class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    #courseList = [];

    getInfo() {
        return  { name: this.name, email: this.email };
    }

    enrollCourse(name){
        this.#courseList.push(name);
    }

    getCourseList(){
        return this.#courseList;
    }

    login(){
        return "You are logged in";
    }
}

class SubAdmin extends User{

    constructor(name, email) {
        super(name, email);
    }
    getAdminInfo(){
        return "I am subadmin";
    }

    login(){
        return "Login for admin only";
    }
}



module.exports = User;

// const rock = new User("rock", "rock@rock.pk");

// console.log(rock.getInfo());

// rock.enrollCourse("Angular Bootcamp");

// console.log(rock.getCourseList());

const tom = new SubAdmin("Ania", "ania@op.pl");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());