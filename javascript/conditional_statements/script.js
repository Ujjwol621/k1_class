//Conditional Statements
//If-else statement
// if(condition)
// {
//     //code to be executed if condition is true
// }
// else{
//     //code to be executed if condition is false
// }

// if(true){
//     console.log("Condition is true")
// }
// else{
//     console.log("Condition is false")
// }

// let x = 5
// if(x>5){
//     console.log("x is greater than 5")
// }
// else{
//     console.log("x is less than or equal to 5")
// }

//odd-even number
// let number = 12121;
// if (number % 2 == 0) {
//   console.log("Number is even");
// } else {
//   console.log("Number is odd");
// }

//if-else if statement
// let x=2
// if(x>5){
//     console.log(`${x} is greater than 5`)
// }
// else if(x==5){
//     console.log(`${x} is equal to 5`)
// }
// else{
//     console.log(`${x} is less than 5`)
// }

// let age= -1
// if(age>=0 &&age<5){
//     console.log("KID")
// }
// else if(age>=5 && age<12){
//     console.log("CHILD")
// }
// else if(age>12 && age<19){
//     console.log("TEENAGER")
// }
// else if(age>=19 && age<60){
//     console.log("ADULT")
// }
// else if(age>=60){
//     console.log("Old")
// }
// else if(age>=150)
// {
//     console.log("Very Rare")
// }
// else{
//     console.log("Invalid age")
// }

let marks = 40
if(marks>=90 && marks<=100){
    console.log("Grade A+")
}
else if(marks>=80 && marks<90){
    console.log("Grade A")
}
else if(marks>=70 && marks<80){
    console.log("Grade B+")
}
else if(marks>=60 && marks<70){
    console.log("Grade B")
}
else if(marks>=50 && marks<60){
    console.log("Grade C+")
}
else if(marks>=40 && marks<50){
    console.log("Grade C")
}
else if(marks>=30 && marks<40){
    console.log("Grade D+")
}
else if(marks>=20 && marks<30){
    console.log("Grade D")
}
else if(marks>=10 && marks<20){
    console.log("Grade E")
}
else if(marks>=0 && marks<10){
    console.log("NG")
}
else{
    console.log("Invalid marks")
}