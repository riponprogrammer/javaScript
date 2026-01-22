let person = {
    name: "Alice", 
    age: 30,
    city: "New York",
    country: "USA"
};

// console.log(person);
export { person };

let arr = [10, 20, 25, 30, 40, 50];
// let arr2 = arr.map(function(value){
//     return value * 2;
// });
// console.log(arr2);

// let arr3 = arr.filter(function(value){
//     return value < 25;
// });
// console.log(arr3);

// let arr4 = arr.find(function(value){
//     // return value === 25;
//     return value > 25;
// });
// console.log(arr4);

let arr5 = arr.reduce(function(accumuLator, currentValue){
    // console.log('Accumulator : ',accumuLator);
    // console.log('CurrentValue : ', currentValue);
    return accumuLator + currentValue;
})
// console.log(arr5)

let arr6 = arr.sort(function(a, b){
    // console.log('A : ', a);
    // console.log("B : ", b)
    return b - a;
});
// console.log(arr6);

let arr7 = arr.every(function(value){
    return value < 60;
});
// console.log(arr7);

let arr8 = arr.some(function(value){
    return value > 45;
});
// console.log(arr8);

let arr9 = arr.includes(25);
console.log(arr9);

let arr10 = arr.indexOf(30);

let arr11 = arr.lastIndexOf(25);
console.log(arr11)

let arr12 = arr.join(" - ");
console.log(arr12);