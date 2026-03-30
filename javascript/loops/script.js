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
// let count=0;
// for(let i=1; i<=100; i++){
//     if(i%2==0){
//         console.log(i);
//         count++;
//     }
// }
// console.log(`Total even numbers between 1 and 100 are ${count}`);

// print first 5 prime numbers
// let count=0;
// for(let i=2; count<5; i++){
//     let isPrime=true;
//     for(let j=2; j<i; j++){
//         if(i%j==0){
//             isPrime=false;
//             break;
//         }
//     }
//     if(isPrime){
//         console.log(i);
//         count++;
//     }
// }

// 2. while loop
// let i=1;
// while(i<=20){
//     console.log(i);
//     i++;
// }

// let i=20;
// while(i>0){
//     console.log(i);
//     i--;
// }

// 3. do while loop
// let i=9;
// do{
//     console.log(i);
//     i++;
// }while(i<=10);

// difference between while and do while loop
// in while loop, the condition is checked before executing the code block, so if the condition is false at the beginning, the code block will not execute at all.
// in do while loop, the code block is executed at least once before checking the condition, so even if the condition is false at the beginning, the code block will execute at least once.