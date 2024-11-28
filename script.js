// const consoleLog = (item) => {
//     console.log(item);
// };
// const forEachTest = (arr, callback) => {
//     arr.forEach((item) => callback(item));
// };
// const arr = ["cao", "nguyen", "tri", "ngoc"];
// forEachTest(arr, consoleLog);

// const consoleLog = (item) => {
//     console.log(item);
// };
// const forEachPair = (arr, callback) => {
//     for (let i = 0; i < arr.length - 1; i++){
//         callback(arr[i] + arr[i + 1]);
//     }
// };
// const arr = [1, 2, 3 , 4 , 5];
// forEachPair(arr, consoleLog);
// console.log(Math.random(3));

//bai3
// const getRandom = () => {
//     return undefined;
// };
// const promise = new Promise((resolve, reject) => {
//     const value = getRandom();
//     if (value === undefined) reject("Error: can't create random number");
//     else resolve(value);
// });
// promise
//     .then((item) => {
//         console.log("create successfully ", parseInt(item));
//     })
//     .catch((string)=> console.log(string))
//     .finally(()=> console.log("alway run this"));


//bai4

// const arr = [];
// const promise = new Promise((resolve, reject) => {
//     if (arr.some((item) => item % 2 == 0)){
//         resolve(arr.filter((item) => item % 2 == 0));
//     } else {
//         reject("Error: Not found even number!");
//     }
// });
// promise 
//     .then((arr) => {
//         console.log(arr);
//     })
//     .catch((error) => console.log(error));

//bai5

// fetch("https://restcountries.com/v2/all")
// .then((response) => response.json())
// .then((data) => {
//     let htmls = data.map((item) => {
//         return `
//             <div class="inner-item">
//                 <div class="inner-box">
//                     <img src="${item.flags.png}" alt="${item.capital}-${item.name}">
//                     <div class="inner-title">${item.capital}-${item.name}</div>
//                 </div>
//             </div>
//         `;
//     });
//     htmls = htmls.join("");
//     console.log(htmls);
//     // const box = document.querySelector("#country");
//     // box.innerHTML = htmls;
// })
// .catch((error) => console.log(error));

const api = "https://api.ipify.org?format=json";

fetch(api)
.then((response) => response.json())
.then((data) => {
    const div = document.createElement("div");
    div.innerHTML = data.ip;
    document.body.appendChild(div);
})
.catch((error) => console.log(error));