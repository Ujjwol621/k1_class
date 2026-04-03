// rest and spread(...)

// spread(...)
// it spreads the values of the array to the existing new array
// let arr = [1,2,3]
// let arr2 = [10,11,12,...arr, 4,5,6]
// console.log(arr2)

// it can also be used in objects
// let user = {
//     phone : 12124124,
//     address : "bkt"
// }
// let user2 = {
//     name: "Ujjwol",
//     ...user
// }
// console.log(user2)


// rest(...)
// it dynamically takes all the values in a form of array
// mainly used in functions
// function add(...arr){
//     console.log(arr)
// }
// add(1,2,4,5,6,7,33,1,35)