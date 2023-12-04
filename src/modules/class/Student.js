const { user } = require("./user");

class Student extends user{
    constructor(name,email,subject){
        super(name,email);
        this.subject = subject;

    }
}

module.exports = {
    Student
}