"use strict";
// // Question 1: Write a simple asynchronous TypeScript function fetchGreeting that returns a 
// //greeting message after a 2-second delay using setTimeout.
// async function fetchGreetings() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Hello mr.Azan how are you doing!");
//         }, 2000);
//     });
// }
// fetchGreetings().then((greeting) => {
//     console.log(greeting);
// });
///-------------------------------------------------------------------------------------------------------------------------///
//Question 2: Write a function simulateTask that simulates a task by logging "Task started", 
// waits for 1 second, and then logs "Task completed". Use setTimeout for the delay
// function simulateTask(){
//     console.log("Task started")
//     setTimeout(()=>{
//         console.log("Task completed")
//     },1000)
// }
// simulateTask()
//--------------------------------------------------------------------------------------------------------------------------------------------------//
//QUESTION 3: Write a function fetchData that returns a Promise which resolves with the string 
// "Data fetched successfully!" after a delay of 1 second
// function fetchData(){
//     return new Promise ((resolve, reject) =>{
//         setTimeout(()=>{
//             resolve("Data fetched successfully!")
//         },2000)
//     })
// }
// fetchData().then((res)=>{
//     console.log(res)
// })
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Question 4: Write a function fetchWithError that returns a Promise. It should randomly either 
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a 
// delay of 1 second. Handle the rejection using .catch
// function fetchWithError(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             let error = true;
//         if(!error){
//             resolve("Data fetched successfully!")
//         }else{
//             reject("Data fetch failed!")
//         }
//         },2000)
//     })
// }
// fetchWithError().then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Qyuestion 5: Write a function executeSequentially that executes two functions fetchData and 
//processData sequentially using Promises, and logs the results in the order they are 
//called
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 2000);
    });
}
function processData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data processed resolved");
        }, 3000);
    });
}
function executeSequentially(fetchDataCallback, processDataCallback) {
    fetchDataCallback().then((res) => {
        console.log(res);
        return processDataCallback();
    })
        .catch((err) => {
        console.log(err);
    });
}
executeSequentially(fetchData, processData);
