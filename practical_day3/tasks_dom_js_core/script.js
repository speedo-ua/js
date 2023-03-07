const shoesImgNodes = document.querySelectorAll('.shoe');
const shoeBckgrnddNodes = document.querySelectorAll('.gradient');
const btnsColorNodes = document.querySelectorAll('.color');

let priceObj = {
    blue: "189.99",
    red: "209.99",
    green: "179.99",
    orange: "169.99",
    black: "309.99",
};

let shoesImgArr = [];
let shoeBckgrndArr=[];
let btnsColorArr=[];
let getArr = (elemNodes, elemArr)=>elemNodes.forEach(elem=>elemArr.push(elem));
getArr(shoesImgNodes, shoesImgArr);
getArr(shoeBckgrnddNodes, shoeBckgrndArr);
getArr(btnsColorNodes, btnsColorArr);
let colorArr = btnsColorArr.map(elem=>elem.getAttribute('color'));

colorArr.forEach((btncolor)=>{
    btnsColorArr.find(elem=>elem.getAttribute('color') == btncolor)
                .addEventListener('click',()=>eventBtns(btncolor));
});  

function eventBtns (btncolor){
    btnsColorArr.forEach(element=>element.classList.remove("active"));
    btnsColorArr.find(elem=>elem.getAttribute('color') == btncolor)
               .classList.add("active");

    shoesImgArr.forEach(element=>element.classList.remove("show"));
    shoesImgArr.find(elem=>elem.getAttribute('color') == btncolor)
               .classList.add("show");

    shoeBckgrndArr.forEach(element=>element.classList.remove("second"));
    shoeBckgrndArr.find(elem=>elem.getAttribute('color') == btncolor)
                  .classList.add("second");
    
    let primary = btnsColorArr.find(elem=>elem.getAttribute('color') == btncolor).getAttribute("primary");
    document.querySelector(':root').style.setProperty('--primary', primary);
    document.querySelector("#outprice").innerHTML = priceObj[btncolor];
};
