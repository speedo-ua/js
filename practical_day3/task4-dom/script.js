// реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock

let inputFields = document.querySelectorAll('input');
let btnSend = document.querySelector('.btn');
let outBlock = document.querySelector('.out');

let inputArr = [];
inputFields.forEach (elem=>inputArr.push(elem));

let fioInput = inputArr.find(elem=>elem.name == "fio");
let phoneInput = inputArr.find(elem=>elem.name == "phone");
let dateInput = inputArr.find(elem=>elem.name == "birthday");
let emailInput = inputArr.find(elem=>elem.name == "email");

btnSend.addEventListener('click', ()=>{
   outBlock.innerHTML = `
   <ol> 
   <li> П.І.Б.: ${fioInput.value}</li> 
   <li> Телефон: ${phoneInput.value}</li> 
   <li> Дата народження: ${dateInput.value} </li> 
   <li> Email: ${emailInput.value} </li> 
   </ol>`
})

