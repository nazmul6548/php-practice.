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


const user = {
    userName:"nazmul islam jewel",
    location:"chittagong",
    age:25,
    occupation:"web devoloper",
}
const {location:bari,userName:nam,age:boyos,occupation:pesha}=user;
console.log(bari,boyos,pesha,nam);