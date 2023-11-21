// const total =[1,2,4,5,6,7];

// const output = total.reduce((prevValue,currentValue) =>  {
//     console.log(`prevValue ${prevValue} currentValue ${currentValue}`); /*check value*/
//     return prevValue + currentValue},0);

// console.log(output);






const number =[1,2,4,5,6,7];

const result = number.reduce(function(initialValue,currentValue) {
    return initialValue+currentValue;
},0);

console.log(result);



const shoppingCart = [
    {
        productName : "shirt",
        price  : 400,
    },
    {
        productName : "tupi",
        price : 200,
    },
    {
        productName : "watch",
        price : 1200,
    },
    {
        productName : "mobile",
        price : 20000,
    },
];

const totalPrice = shoppingCart.reduce((previousValue , productName) => {
    return previousValue + productName.price;
},0);

console.log(totalPrice);

// *deastructuring object.
const user = {
    userName:"nazmul islam jewel",
    location:"chittagong",
    age:25,
    occupation:"web devoloper",
}
const {location:bari,userName:nam,age:boyos,occupation:pesha}=user;
console.log(bari,boyos,pesha,nam);


// *spread operator
// const nums =[1,1,2,2,4,5,6,7];
// const results =(Math.max(...nums));
// console.log(results);

// const num =[1,1,2,2,4,5,6,7];
// const resultss =(Math.min(...num));
// console.log(resultss);

// const arr = [1,2,34,5,5,6,7,8,9];
// const arr1n = [9,6,7,8,4,2];
// const total =  [...arr,...arr1n];
// console.log(total);

// *rest operator
// function addtoCard (...number) {
//     return number;
// }
// const res = addtoCard(6,3,5,7,8,9,44);
// console.log(res);

// array itaration
// *map()
// const myArr = [1,2,3,4,[1,9,]];
// const resultsss= myArr.flatMap((value) => {
// return value;

// });
// console.log(resultsss);

// map
const myArrs = [1,2,3,4];
const re= myArrs.map((value) => {
return value *2;

});
console.log(re);