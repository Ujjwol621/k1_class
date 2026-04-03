// String
// Collection of characters in "", '', `

// let fullName = "Ujjwol Tamang"
// console.log(fullName)
// console.log(fullName.length)
// for(let i = 0; i<fullName.length; i++){
//     // console.log(i)
//     console.log(fullName[i])
// }

// for(let i = fullName.length; i>=0; i--){
//     // console.log(i)
//     console.log(fullName[i])
// }

// String Concatenation
// let fullName = "Ujjwol Tamang"
// let address = "Bhaktapur"
// console.log(fullName+ " " + address)

// console.log(fullName.concat(" " + address))

// Write a arrow function that will identify the given word is palindrome or not
// let rev = ''
// const checkPalindrome = (str) => {
//   for(let i = str.length-1; i>=0; i--){
//     rev = rev + str[i]
//   }
// //   console.log(rev)
//   if(str===rev){
//     console.log("palindrome")
//   }
//   else{
//     console.log("not a palindrome")
//   }
// }
// console.log(checkPalindrome('radar'))

// let fullName = "Ujjwol Tamang"
// console.log(fullName.toUpperCase())
// console.log(fullName.toLowerCase())
// console.log(fullName.charAt(0))
// console.log(fullName.charAt(5))
// console.log(fullName.indexOf("l"))
// console.log(fullName.indexOf("l"))
// console.log(fullName.indexOf("j"))
// console.log(fullName.startsWith("U"))
// console.log(fullName.startsWith("j"))
// console.log(fullName.startsWith("Ujjwol"))
// console.log(fullName.endsWith("g"))
// console.log(fullName.endsWith("t"))
// console.log(fullName.endsWith("Tamang"))
// console.log(fullName.slice(2,9))

// let fullName = "Ujjwol Tamang"
// console.log(fullName.replace("U","S"))
// console.log(fullName.replace("Ujjwol","r"))
// console.log(fullName.replace("j","S"))
// console.log(fullName.replaceAll("j","S"))

// let arr = fullName.split()
// console.log(arr) // takes the whole sentence as a single array element

// let arr = fullName.split("") // splits each letters as a individual array elements
// console.log(arr)

// let arr = fullName.split(" ") // split each words as array elements
// console.log(arr)

// let fullName = "           Ujjwol Tamang           "
// console.log(fullName)
// console.log(fullName.trim()) // trim all the spaces at the front and the end of the whole string

// Write a arrow function that will convert "hello" = "Hello" (no replace)
// let str = "hello"
// const convert = () => {
//     let splitstr = str.split("")
//     splitstr[0] = 'H'
//     joinstr = splitstr.join("")
//     console.log(str +" = "+joinstr)
// }
// convert()

// Write a arrow function that will take out only last part of given string. (no splice)
// let string = "berrro sadasdasdga"
// split = string.split(' ')
// console.log(split[1])
// const token = "berrro sadasdasdga"

// Write a arrow function that will convert "hello i am ram" = "Hello I Am Ram" (not replace)
// const toTitleCase = (str) =>{
//     console.log(str)
//     strSplit = str.split(" ")
//     console.log(strSplit)
//     let newStr = strSplit.reduce((acc, word)=>{
//         return acc + " " + word[0].toUpperCase() + word.slice(1)
//     }, "")
//     console.log(newStr.trim())
// }
// console.log(toTitleCase("hello i am ram")); // "Hello I Am Ram"

