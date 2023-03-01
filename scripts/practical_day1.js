// ===================== 1 ===========================
// Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
// приклад:
// const arr = [5, 3, 4, 5,6,7,3];
// const arr2 = compact(arr);
// console.log(arr2) ; // [5,3,4,6,7]"
// ----------------------------------------------------

// const arr = [5,3,4,5,6,7,3];

// // function compact (elem) {
// //     let res = [];
// //     for (i of elem) {
// //     if (!res.includes(i)){
// //         res.push(i);
// //     } 
// // } return res
// // }

// function compact (elem) {
//     let res = [];
//     elem.forEach(item =>{
//         if (!res.includes(item)){
//             res.push(item);
//         } return res
//     })
//     return res
// }

// let arr2 = compact(arr)
// console.log (arr2)


// ===================== 2 ===========================
// Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
//  - початкове значення
//  - кінцеве значення
// а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)
// let arr = createArray(2, 9);
// console.log(arr); // [2,3,4,5,6,7,8,9]"
// ----------------------------------------------------

// function createArray (start, end) {
//     let value = [];
//     for (let i=start; i<=end; i++) {
//         value.push(i);
//     }
//     return value;
// };
// let arr = createArray(2, 9);
// console.log (arr);



// ===================== 3 ===========================
// Створити функцію, яка використовує метод trim() для рядків. Дана функція має брати на вхід рядок із іменами, та сортувати їх по алфавіту, але між іменами може бути багато пробелів(функція має їх забирати)
// let names = ""Alex,    Orysia, Misha,    Ira     , Paul"";
// let newNames = sortNames(names);
// console.log(newNames); // 'Alex, Ira, Misha, Orysia, Paul'
// ----------------------------------------------------

// let names = "Alex,    Orysia, Misha,    Ira     , Paul";

// function sortNames(str) {
//     let splitNames = str.split(',')
//     let res = splitNames.map((elem)=>{
//         let arr = elem.trim();
//         return arr;
//     });
//     res.sort();
//     return res.join (',');
// };

// let newNames = sortNames(names);
// console.log(newNames);


// ===================== 4 ===========================
// Фільтрувати масив об’єктів по віку, тобто новий масив має складатись із об’єктів які старше 18 років.
//  let arr = [  
// { name: ""Misha Klym"", age: 2},  
// { name: ""Sam Winchester"", age: 5 },  
// { name: ""Jordan Peterson"", age: 43 },  
// { name: ""John Wayne"", age: 17 },  
// { name: ""Stan Lee"", age: 22 }
// ];
// let newArray = ...; // [{ name: ""Jordan Peterson, age: 43 }, { name: ""Stan Lee"", age: 22 }]
// ----------------------------------------------------

//  let arr = [  
// { name: "Misha Klym", age: 2},  
// { name: "Sam Winchester", age: 5 },  
// { name: "Jordan Peterson", age: 43 },  
// { name: "John Wayne", age: 17 },  
// { name: "Stan Lee", age: 22 }
// ];

// function ageFilter (item) {
//     let res = []; 
//     arr.forEach((elem)=>{
//         if (elem.age>=18){
//             res.push(elem);
//         } return res
//     })
//     return res.sort((a,b)=>{
//         if (a.age > b.age){
//             return 1
//         } 
//         else if (a.age < b.age){
//             return -1
//         } 
//     })
// }

// let newArray = ageFilter(arr);

// console.log(newArray)



// ===================== 5 ===========================
//  Напишіть функцію яка знаходить в масиві двозначні(10+), трьохзначні(100+) та чотирьохзначні(1000+)  числа та повертає в масив їх кількість.
//  let arr = [1,2,55,3,100, 333, 9999];
// let arrNew = funcName(arr);
// console.log(arrNew); // [1, 2, 1]
// ----------------------------------------------------

// let arr = [1,2,55,3,100, 333, 9999];

// function countNumber(value) {
//         let num2=0; num3=0; num4=0;

//         value.forEach(element => {
//             if (element>=10 && element<100){
//                 return num2++
//             } else if (element >= 100 && element < 1000) {
//                 return num3++
//             } else if (element >= 1000) {
//                 return num4++
//             }
//         });

//         let countValue = [num2, num3, num4];
//         return countValue;
// }

// let arrNew = countNumber(arr);
// console.log(arrNew);



// ===================== 6 ===========================
// Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
// Написати функцію яка виведе нові масиви яка складаються із даних початкового масиву, але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)
// let  arr = [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”];
// let arrNew = funcName(arr);
//  /* 
// [
// [5, 12, 99, 2, 2, 4, 3],
// [”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”
// ] 
// */
// ----------------------------------------------------

// let  arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];

// function sortArr(value) {
//     let arrNum = []; arrNum2 = []; 

//     value.flat().forEach(element => {
//         if (typeof(element)=="number") {
//             return arrNum.push(element);
//         } else {
//             return arrNum2.push(element);
//         }
//     });

//     let arrRes = [arrNum, arrNum2];
//     return arrRes;
// }

// let arrNew = sortArr(arr);
// console.log (arrNew);



// ===================== 7 ===========================
// Додати на початок масиву [3, 7, 9] значенння [4, 3, 9] та на кінець масиву значення [8, 7, 6] різними способами
// ----------------------------------------------------

//7.1.-----------
//  let arr = [[3, 7, 9]];
//  let arrNew = arr.shift(arr);
//  arr.push([4, 3, 9],arrNew,[8, 7, 6]);
//  console.log(arr);

//7.2.-----------
// let arr = [[3, 7, 9]];
// arr.unshift([4, 3, 9]);
// arr.push([8, 7, 6]);
// console.log(arr);

//7.3.-----------
// let arr = [[3, 7, 9]];
// arr.push([4, 3, 9]);
// arr.sort ((a,b)=>{
//     if (a>b){
//         return -1;
//     }
//     console.log (a);
// });
// arr.push ([8, 7, 6]);
// console.log(arr);

//7.4.-----------
// let arr = [[3, 7, 9]];

// arr.push([4, 3, 9]);
// arr.reverse();
// arr.push([8, 7, 6]);
// console.log(arr);




// ===================== 8 ===========================
// Даний масив, вибрати із нього всі парні числа, та всі непарні числа, потім проставити всі парні числа у відповідність парним індексам масиву, а непарні — непарним індексам масиву
//  let arr = [5, 2, 4, 7, 0, 8, 9, 10];
// let arr2 = funcName(arr)
// /*
// index, value
// 0          0
// 1          5
// 2          2
// 3          7
// 4          4
// 5          9
// 6          8
// 7          null
// 8          10
// */"
// ----------------------------------------------------

// let arr = [5, 2, 4, 7, 0, 8, 9, 10];

// function sortArr(elem) {
//     let arrOdd=[];
//     let arrEven=[];
//     let arrSum = [];
    
//     elem.forEach((element)=> {
//         if (element%2==0){
//         return arrEven.push(element);
//         } else return arrOdd.push(element);
//     });
    
//     arrEven.sort((a,b)=>a-b);
    
//     let i = 0;
//     let shifter;
//     while (arrEven.length>0 || arrOdd.length>0) {
//         if (i%2==0 && arrEven.length>0){
//             shifter = arrEven.shift();
//             arrSum.push(shifter);
//         } else if (i%2!=0 && arrOdd.length>0){
//             shifter = arrOdd.shift();
//             arrSum.push(shifter);
//         } else arrSum.push(null);
//         i++;
//     }

// return arrSum;
// };

// let arr2 = sortArr(arr);
// console.log (arr2);


// ===================== 9 ===========================
// Напишіть функцію яка приймає 2 аргументи, ім’я та прізвище, 
// та повертає як результат ЦІЛУ строку ім`я та прізвище. 
// Додати додатково третій параметр - функцію яка буде переводити 
// у певний регістр цю строку, верхній, нижній або кожне слово 
// із великої літери(це три окремі функції мають бути) 
// а також видаляє зайві пробели
// ----------------------------------------------------

// const nameValue = " artEm ";
// const surnameValue = "Shcherbyna";

// let concatName = function (argName, argSurname, foo) {
//                  let arr = [];
//                     arr=[argName.trim(), argSurname.trim()];   
//                     arr = foo(arr);
//                  let res = arr.join(' ');
//                  return res;
//                 };

// let upperFirst = function (arr){
//                 let argName = arr[0];
//                 let argSurname = arr[1];
//                     argName = argName.toLowerCase();
//                     argSurname = argSurname.toLowerCase();
//                     argName = argName[0].toUpperCase()+argName.slice(1);
//                     argSurname = argSurname[0].toUpperCase()+argSurname.slice(1);
//                     res = [argName, argSurname];
//                 return res;
//                 };

// let upperAll = function (arr){
//                 let argName = arr[0];
//                 let argSurname = arr[1];
//                     argName = argName.toUpperCase();
//                     argSurname = argSurname.toUpperCase();
//                     res = [argName, argSurname];
//                 return res;
//                 };

// let lowerAll = function (arr){
//                     let argName = arr[0];
//                     let argSurname = arr[1];
//                         argName = argName.toLowerCase();
//                         argSurname = argSurname.toLowerCase();
//                         res = [argName, argSurname];
//                     return res;
//                         };
                    
// console.log (concatName(nameValue,surnameValue, upperFirst));


// ===================== 10 ===========================
// Створити функцію яка приймає 2 аргументи (логін, пароль). 
// Функція має перевіряти введені дані на наявність таких даних в масиві 
// який є всередині цієї функції. якщо логін та пароль співпадають із даними які є в масиві 
// тоді вивести повідомлення Ви авторизовані, інакше вивести — Логін або Пароль не вірний.
// ----------------------------------------------------

// const login = " artEm ";
// const password = "Shcherbyna";

// function check (argLogin, argPassword) {
//                 let arr = [" artEm ", "Shcherbyna"];
                   
//                 if (arr[0]==argLogin && arr[1]==argPassword){
//                     return alert('Ви авторізовані');
//                 } else return alert('Логін або Пароль не вірний');  
                 
//                 };
// check(login, password);





