const Ola = {
    firstName: "Ola",
    lastName: "Pawelec",
    sex: "f",
    role: "Admin",
    courseNumber: 3,
    getInfo: function () {
        var pronunFirst;
        var pronounSecond;

        switch (this.sex) {

            case "f":
                pronunFirst = "Her";
                pronounSecond = "She";
                break;
            case "m":
                pronounFirst = "His";
                pronounSecond = "He";
                break;
            default:
                break;
        }

        console.log(`
        Firstname is: ${this.firstName}
        Lastname is: ${this.lastName}
        ${pronunFirst} role is: ${this.role}
        and ${pronounSecond} is studying ${this.courseNumber} courses
        `);
    }
};

const dj = {
    firstName: "Rock",
    lastName: "DJ",
    sex: "m",
    role: "Sub-Admin",
    courseNumber: 4,
};

// Ola.getInfo();

// var djInfo = Ola.getInfo.bind(dj);
// djInfo();

// Ola.getInfo.call(dj);

Ola.getInfo.call(Ola);