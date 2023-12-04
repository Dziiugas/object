

class user{
    constructor(name,email){ //object constructor
        this.name = name;
        this.email = email;

    }
    setrole(role){ //setter
        this.role = role;
    }
    setdepartment(department){//setter
        this.department= department
    }
    getuserprofile(){ //getter
        return[
            this.name,
            this.email
        ]
    }
    getfulluserdata(){ //getter
        return[
            this.name,
            this.email,
            this.role,
            this.department
        ]
    }

    displayui(userdata){
        /*display user data in html list*/
        for(let user of userdata){
            const ul = document.createElement('ul');
            const li = document.createElement('li');
            li.textContent = user;
            ul.appendChild(li);
            document.querySelector('body').appendChild(ul)

        }
    }
}

module.exports = {
    user
}