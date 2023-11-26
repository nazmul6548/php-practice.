// * general way
let myNumbers = [1, 2, 3, 4, 5];
for (const number of myNumbers) {
    console.log(number);
    /*ei khane for in dia korle index return korto but for of er khetre elements return korei */
}


/*object thgeke for of use kore ki vabe property cvalue return korei */
let myAdress =  {
    street: "123",
    city: "London",
    country: "England"
};
let solution = Object.keys(myAdress); /*object.keys method dia ei object k array krte hbe*/
for (const result of solution) {
    console.log(myAdress[result]);
}

let text = "programming";
for (const iterator of text) {
    console.log(iterator);
}
