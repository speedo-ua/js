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

// 4)================================


class GeometricFigure {
    constructor (){
    };

    getArea(){
        return 0
    };
   
    toString(){
        return Object.getPrototypeOf(this).constructor.name;
    };   

}

class Traingle extends GeometricFigure {
    constructor(sideA, sideB, sideC){
        super();
        this.sideA=sideA;
        this.sideB=sideB;
        this.sideC=sideC;
    };

    getArea(){
        let p = (this.sideA+this.sideB+this.sideC)/2;
        return Math.sqrt(p*(p-this.sideA)*(p-this.sideB)*(p-this.sideC));
    };  
};

class Square extends GeometricFigure {
    constructor(sideA, sideB){
        super();
        this.sideA=sideA;
        this.sideB=sideB;
    };

    getArea(){
        return this.sideA*this.sideB;
    } ;   
};

class Circle extends GeometricFigure {
    constructor(radius){
        super();
        this.radius=radius;
    };

    getArea(){
        return Math.PI * Math.pow (this.radius, 2);
    } ;
};

const figures = [new Traingle (5, 6, 7), new Square (5, 6), new Circle (5)];

function handleFigures(arr){
    let sum = 0;
    arr.forEach(element => {
        if (element instanceof GeometricFigure ){
            let classArea = element.getArea();
            let className = element.toString();
            sum += classArea;
            console.log('Geometric figure: ' + className + ' - area: ' + classArea);
        };
    }); 
    console.log ('total area: ' + sum);
}

console.log (handleFigures(figures));


