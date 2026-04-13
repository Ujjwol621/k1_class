let x = 100
let user = {
    name: "John",
}
let arr = [1, 2, 3, 4, 5]

const add = (a, b) => {
    return a + b
}

// module.exports = {
//     x,
//     user,
//     arr,
//     add
// }

// You can also use the ES6 export syntax if your environment supports it(for multiple exports):
// export { x, user, arr, add }

// You can also export each variable/function individually like this:
// exports.x = x
// exports.user = user
// exports.arr = arr
// exports.add = add

// You can also use the ES6 export syntax if your environment supports it (for single export):
// export default user