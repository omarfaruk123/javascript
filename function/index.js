// use callback, annonymous and closure 
// function compareBy(propertyname)
// {
//     return function(a, b){
//         let x = a[propertyname],
//             y = b[propertyname];

//             if(x > y) return 1;
//             else if(x < y) return -1;
//             else  return 0;
//     }
// }

// const names = [
//         { name: "omar", price: 500 },
//         { name: "faruk", price: 600},
//         { name: "korim", price: 200}
//     ];

// // sort products by name
// console.log('Products sorted by name:');
// names.sort(compareBy("name"));

// console.table(names);

// // sort products by price
// console.log('Products sorted by price:');
// names.sort(compareBy('price'));

// console.table(names);


// anonymous function

// (function(){
//     console.log('anonymous');
// })();

// pass argument of annonymous function

// let person = {
//     name: 'omar', roll:4
// };

//  (function(){
//     console.log('Name : ' + person.name);
//     console.log('Roll : ' + person.roll);
// })(person);

// use recursive function

// function counDown(number)
// {
//     console.log(number);
//     nextNum = number - 1;
//     if(nextNum > 0){
//         counDown(nextNum);
//     }
    
// }

// counDown(5);
// sum use recursive function
// function sum(n)
// {
//     if(n <= 1){
//         return n;
//     }
//     return n + sum(n - 1);
// }


// let summation = sum(5);
// console.log(summation);

// findout factorial number use recursive function

// function factorialNum(n)
// {
//     if( n === 1) return 1;
//     return n * factorialNum(n - 1);

// }

// let factorialN = factorialNum(5);
// console.log(factorialN);

// default parameter 

function say(message='Hi') {
    console.log(message);
}

say(); // 'Hi'
say(undefined); // 'Hi'
say('Hello'); // 'Hello'