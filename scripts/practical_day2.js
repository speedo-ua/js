// 1) =======================================
// const person = {
//     name: 'Bob',
//     height: 180,
//     weight: 200,
//     hair: 'brown',
//     status: 'student'
// }

// function showProps (obj) {
//     let arrKeys = [];
//     let arrValues = [];
//     let arrRes = [arrKeys, arrValues]
//     for (let keys in obj) {
//         arrKeys.push(keys);
//         arrValues.push(obj[keys])
//     }
//     return arrRes
// }
// console.log (showProps(person))

// 2) ===================================

// let mentor = { 
//             course: "JS fundamental", 
//             duration: 3,
//             direction: "web-development",
//         };

//         function propsCount(currentObject){
//             let res=0;
//             for (let keys in currentObject){
//                 res++
//             }
//             return res
//         }
//         console.log (propsCount(mentor));


// 3) =========================================

// class Person {
//     constructor (name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//     showFullName(){
//         return (this.name +' '+ this.surname)
//     };
// };

// class Student extends Person {
//     constructor (name, surname, year){
//         super(name, surname);
//         this.year = year;
//     };

//     showFullName(midleName){
//         this.midleName = midleName;
//         return (this.name + ' '+ this.midleName + ' ' + this.surname);
//     };

//     showCourse() {
//         let course = 2023 - this.year;
//         return course
//     }
// };

// const stud1 = new Student("Petro", "Petrenko", 2019);
// console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
// console.log("Current course:" + stud1.showCourse()); //Current course: 4