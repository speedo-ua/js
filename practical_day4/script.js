// 1) ===============

let body_1 = document.querySelector ('body');
let btn_1 = document.createElement ('button');
let text_1 = document.createElement('h1');
body_1.append(text_1, btn_1);
btn_1.textContent = 'mouse';

btn_1.addEventListener ("mouseover", ()=>{
        text_1.textContent = 'I was pressed!';
})

btn_1.addEventListener ('mouseleave', ()=>{
    text_1.textContent = 'Mouse is not on me!';
})


// 2) На сторінці потрібно реалізувати 2 випадаючих списки. У першому містяться назви країн, у другому – назви міст. Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку певна країна - в правому випадаючому  списку з'являлися міста цієї країни. Список міст формується динамічно, через JavaScript. Також потрібно нижче вивести назву обраної країни і місто. 

const countryList = document.querySelector('#country');
const citiesList = document.querySelector('#cities');
const citiesObj = {
                ger: ['Berlin', 'Munich', 'Stuttgart'],
                usa: ['NY', 'Washington', 'Seatle'],
                ukr: ['Dnipro', 'Kyiv', 'Lviv'],
                };
let textP = document.querySelector('p');
let city, cities, citiesOption;
let country = countryList[0].textContent;

function addCities (getTrgt){
    cities = citiesObj[getTrgt]
    cities.forEach((elem)=>{
        citiesOption = document.createElement('option')
        citiesOption.setAttribute('value', elem);
        citiesOption.textContent = elem;
        citiesList.append(citiesOption);
        });
        city = citiesList[0].textContent;
}
addCities(countryList.value);


countryList.addEventListener('change', (e)=>{
    while(citiesList.firstChild){
        citiesList.removeChild(citiesList.firstChild)
    };
    let getTrgt = e.target.value;
    for (let i=0; i<countryList.length; i++){
        if (getTrgt == countryList[i].value){
            country = countryList[i].textContent;
        };
    };
    addCities(getTrgt); 
    textPost (country, city);
    });


citiesList.addEventListener('change', (e)=>{
    let getTrgt = e.target.value;
    
    for (let i=0; i<citiesList.length; i++){
        if (getTrgt == citiesList[i].value){
           city = citiesList[i].textContent;
        };
    };
    textPost (country, city);
})


function textPost (country, city){
    textP.textContent = country + ' ' + city;
}
textPost(country, city);


// 3)===========================

let fullNameInput = document.querySelector('#fname');
let emailInput = document.querySelector('#email');
let telInput = document.querySelector('#tel');
let passwordInput = document.querySelector('#password');
let cpasswordInput = document.querySelector('#cpassword');
let checkboxInput = document.querySelector('#agree');
let submitButton = document.querySelector('.submit')
let outText = document.querySelector('.outText')

let fullName, email, password, cpassword, checkbox
let submitMsg;


fullNameInput.addEventListener('input', (e)=>{
    let chkvalue = e.target.value;
    let RegExpfname = /[a-zA-Z-]+\s[a-zA-Z-]+\s?(?:[a-zA-Z-]+\s?){1,}/gi;
    fullName = RegExpfname.test(chkvalue);
    if (fullName){
        outText.innerHTML = 'Full name is correct'
    } else if (chkvalue==''){
        outText.innerHTML = null;
    } else outText.innerHTML = 'Full name is NOT correct!';
});

emailInput.addEventListener('input', (e)=>{
    let chkvalue = e.target.value;
    let RegExpEmail = /^[^_\W][\w\-\.]+@[0-9a-zA-Z\-\.]+\.[a-zA-Z]{2,}/gi;
    email = RegExpEmail.test(chkvalue);
    if (email){
        outText.innerHTML = 'Email is correct'
    } else if (chkvalue==''){
        outText.innerHTML = null;
    } else outText.innerHTML = 'Email is NOT correct!';
});

passwordInput.addEventListener('input', (e)=>{
    let chkvalue = e.target.value;
    pwdValidation(chkvalue)
});

cpasswordInput.addEventListener('input', (e)=>{
    let chkvalue = e.target.value;
        pwdComparison(chkvalue)
});

telInput.addEventListener('input', (e)=>{
    let chkvalue = e.target.value;
    let RegExpTel = /\+\d{1,2}-\d{3}-\d{3}-\d{2}-\d{2}/g;
    let RegExpEnemyTel = /^(\+7-|\+37-5)/g;
    if (RegExpEnemyTel.test(chkvalue)) {
        outText.innerHTML = 'Enemy tel spotted! Fire in the hole!';
        setTimeout(() => {
            e.target.value = null;
            outText.innerHTML = null;
        }, 3000);
    } else outText.innerHTML = 'Phone number is NOT correct. <br> Only +00-000-000-00-00 format';

    if (RegExpTel.test(chkvalue) && !RegExpEnemyTel.test(chkvalue)){
        outText.innerHTML = 'Phone number is correct'
        phone = true;
    } else if (chkvalue==''){
        outText.innerHTML = null;
    } 
});

function pwdValidation (chkvalue){
    let RegExpdigits = /[0-9]/;
    let digits = (RegExpdigits.test(chkvalue))?"digits OK":"NO digits";
    let RegExpScharacter = /[a-z]/;
    let smallCharacter = (RegExpScharacter.test(chkvalue))?"small character OK":"NO small character";
    let RegExpBcharacter = /[A-Z]/;
    let bigCharacter = (RegExpBcharacter.test(chkvalue))?'big character OK':'NO big character';
    let RegExpSymbol = /[_-]/;
    let symbol = (RegExpSymbol.test(chkvalue))?'symbol "-" or "_" OK':'NO "-" or "_" symbol';

    outText.innerHTML = `Check password: </br> ${digits} </br> ${smallCharacter} </br> ${bigCharacter} </br> ${symbol}`;

    console.log (chkvalue)
    if (RegExpdigits.test(chkvalue) && RegExpScharacter.test(chkvalue) && RegExpBcharacter.test(chkvalue) && RegExpSymbol.test(chkvalue) && chkvalue!=''){
        outText.innerHTML = `Check password: password OK`;
        password = chkvalue;
    } else if (chkvalue==''){
        outText.innerHTML = null;
        password = false;
    } else password = false;
}

function pwdComparison(chkvalue){
    if (chkvalue == password){
        cpassword = true;
        outText.innerHTML = `Password confirmed`;
    } else if (chkvalue != password && chkvalue!=''){
        outText.innerHTML = `Password NOT confirmed`;
        cpassword = false;
    } else if (chkvalue==''){
        outText.innerHTML = null;
        cpassword = false;
    } 
}

checkboxInput.addEventListener ('change', (e)=>{
    checkbox = e.target.checked;
})

submitButton.addEventListener('click', ()=>{
    if (fullName && email && cpassword && checkbox){
        outText.innerHTML = 'SUBMITED!';
    } else outText.innerHTML = 'Form not completed!';
})