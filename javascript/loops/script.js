//loop
// If we have to take value in range (1-100, 500-900, etc) then we can use loop
// if we need to execute same code multiple times then we can use loop

// types of loops
// 1. for loop
// 2. while loop
// 3. do while loop

// 1. for loop
// for(let i=1; i<=100; i++){
//     console.log(`${i} Hello World`);
// }

// for(let i=1; i<=10; i++){
//     console.log(`7 x ${i} = ${7*i}`);
// }

//WAP program that counts the total number of even numbers between 1 to 100
let count=0;
for(let i=1; i<=100; i++){
    if(i%2==0){
        console.log(i);
        count++;
    }
}
console.log(`Total even numbers between 1 and 100 are ${count}`);