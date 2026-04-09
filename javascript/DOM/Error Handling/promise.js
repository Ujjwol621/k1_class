// Promise in JavaScript is a powerful tool for handling asynchronous operations.
// It allows you to write cleaner and more manageable code when dealing with tasks that take time to complete,
// such as fetching data from an API or reading files.

// const pr = new Promise((reslove,reject)=>{
//     let isData = false;
//     if(isData){
//         reslove("Data fetched successfully");
//     }    else{
//         reject("Failed to fetch data");
//     }
// })

// pr.then((message)=>{            // The then() method is used to handle the resolved value of the promise.
//     console.log(message);
// }).catch((error)=>{             // The catch() method is used to handle any errors that occur during the execution of the promise.
//     console.log(error);
// }).finally(()=>{
//     console.log("This will always run regardless of the promise outcome.");
// })

// let res = fetch('https://dummyjson.com/products')
// res.then((data)=>{
//     // console.log(data)
//     return data.json(); // The json() method is used to parse the response data as JSON.
// }).then((info)=>{
//     console.log(info.products[0].id);
//     console.log(info.products[0].title);
// }).catch((error)=>{
//     console.log(error);
// })

// let recipe = fetch("https://dummyjson.com/recipes")
// // console.log(recipe);
// recipe.then((data)=>{
//     return data.json();
// }).then((info)=>{
//     console.log(info.recipes[0].id);
//     console.log(info.recipes[0].name);
// }).catch((error)=>{
//     console.log(error);
// });

// async-await is a syntactic sugar built on top of promises.
// It allows you to write asynchronous code in a more synchronous manner,
// making it easier to read and understand.

// const getProducts = async() => {
//     try{
//         let res = await fetch('https://dummyjson.com/products');
//         res = await res.json();
//         console.log(res);
//     } catch(error){
//         console.log(error);
//     }
// }
// getProducts();

let getUsers = async () => {
  try {
    let res = await fetch("https://dummyjson.com/users");
    res = await res.json();
    console.log(res.users[0].id);
    console.log(res.users[0].firstName);
  } catch (error) {
    console.log(error);
  }
};
getUsers();
