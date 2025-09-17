// object method

// let person = {
//     fname:'omar',
//     roll: 5
// };

// person.address = function(){
//     console.log("name " + this.fname + " Roll " + this.roll);
// }

// person.address();

// let person = {
//     fname: "omar",
//     roll: 55,
//     getName: function(){
//         console.log("Name " + this.fname);
//     }
// }

// person.getName();

// let person = {
//     fname: "Omar",
//     roll: 555
// }

// function getName(){
//     console.log(this.fname);
// }
// person.getNam = getName;

// person.getNam();

let person = {
    fname: "omar",
    roll: 55,
    getName(){
        console.log(this.fname);
    }
}

person.getName();