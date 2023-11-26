// const number = [1, 2, 3, 4, 5, 6];
// for (const numbers in number) {
//     console.log(number[numbers]);
        
//     }
let myName = { name: 'nazmul', age:25, email:'nazmul6548@gmail.com'};
for (const result in myName) {
   console.log(result);
    }


    let myAdress = { name: 'nazmul', age:25, email:'nazmul6548@gmail.com'};
for (const result in myAdress) {
   console.log(myAdress[result]);
    }


let myNumber =[1,2 ,3,4,5,6,7,8,9];
for (const result in myNumber) {
   console.log(result); /*return index*/
};

let myNumbers =[1,2 ,3,4,5,6,7,8,9];
for (const result in myNumbers) {
   console.log(myNumbers[result]); 
};