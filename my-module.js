class Person {
    constructor(options){
        this.name = options.name
        this.age = options.age
    }

    ageInfo() {
        if(this.age>=18){
            return `${this.name} is adult`
        }
        else{
            return `${this.name} is child`
        }
        
    }
}

module.exports.Person = Person;