// this will be big constructor- similarly to how we did the game
class Employee {

    constructor(role, name, id, email) {
        this.role = role;
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getRole(){
        return "Employee";
    }
    
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
}

module.exports = Employee;