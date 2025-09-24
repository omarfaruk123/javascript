class Person
{
    constructor(fname, lname){
        this.firstName = fname;
        this.lastName = lname;
        this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    }
}


let person = new Person("omar", "faruk");

console.log(person.firstName);
console.log(person.getFullName());