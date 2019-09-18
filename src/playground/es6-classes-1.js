class Person {
    constructor(name = 'Annonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi I am ${this.name}!`
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old`
    }
}

class Student extends Person{
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription() {
        let descripton = super.getDescription();
        if(this.hasMajor()){
            descripton += ` Their major is ${this.major}`;
        }
        return descripton;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    getGreeting(){
        let message = super.getGreeting();
        if(this.homeLocation){
            message += ` I'm visiting from Puebla`
        }
        return message;
    }
}

const me = new Traveler('Daniel', 24, "Puebla");
console.log(me.getGreeting());

const you = new Traveler(undefined, 20, undefined);
console.log(you.getDescription());

