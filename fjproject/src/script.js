let products=[];
const bodyHtml = document.querySelector('body');
const pHtml = document.querySelector('p');
const asideLeftHtml = document.querySelector('.aside-left');
const asideRightHtml = document.querySelector('.aside-right');
const mainContentHtml = document.querySelector('main');
const ulHtmlProduct = document.createElement('ul');
ulHtmlProduct.classList.add('product-container');
const inputForm = document.createElement('form');
inputForm.classList.add('product-options');
let checkboxArr = [];

console.log (ulHtmlProduct)

function getRequest (){
    fetch('https://dummyjson.com/products')
                        .then(res => res.json())
                        .then(data =>{
                            products=[...data.products];
                            categorySort()
                        });
};
getRequest();

let productByCat ={};

function categorySort(){
    let setCategory = new Set();
    let arrCategory=[];
    for (let cat of products){
        setCategory.add(cat.category);
    };
    for (let cat of setCategory){
        productByCat[cat]=[];
        arrCategory.push(cat)
    };
    
    products.forEach(elem=>{
            for (let key in productByCat){
            if (key == elem.category){
                productByCat[key].push(elem);
                };
            };
        });
    
    addCheckboxes(arrCategory)
    addProdToContent()
};

function addCheckboxes(arr){
    asideLeftHtml.append(inputForm);
    arr.forEach(elem=>{
        inputForm.innerHTML +=`
        <input type="checkbox" class="checkbox" name="${elem}" id="${elem}">
        <label for="${elem}" class="label-checkbox">${elem}</label>
        `
    })

    let inputChekBox = document.querySelectorAll('input');

    function checkboxCatch(){
        inputChekBox.forEach(elem=>{
            elem.addEventListener('change', ()=>{
                if (elem.checked){
                    checkboxArr.push(elem.name);
                    ulHtmlProduct.innerHTML ='';
                    addProdToContent()
                } else if (!elem.checked){
                    let index = checkboxArr.indexOf(elem.name);
                    checkboxArr.splice(index,1);
                    ulHtmlProduct.innerHTML ='';
                    addProdToContent()
                }
            })
        })
    }
    checkboxCatch();
}

function addProdToContent(){
    console.log(checkboxArr)
    mainContentHtml.append(ulHtmlProduct);
    if (checkboxArr.length==0){
        products.forEach(elem =>{
            ulHtmlProduct.innerHTML += `
            <li class="product-element">
                <div class="product-element__title">${elem.title}</div>
                <img src="${elem.thumbnail}" class="product-element__thumbnail">
                <div class="product-element__description">${elem.description}</div>
                <div class="product-element__rating"><b>Rating:</b> ${elem.rating}</div>
                <div class="product-element__price">${elem.price} &#36</div>
                <button class="product-element__btn">Buy</button>
            </li>`;
    })} else {
            checkboxArr.forEach(cat=>{
                productByCat[cat].forEach(elem =>{
                ulHtmlProduct.innerHTML += `
                <li class="product-element">
                    <div class="product-element__title">${elem.title}</div>
                    <img src="${elem.thumbnail}" class="product-element__thumbnail">
                    <div class="product-element__description">${elem.description}</div>
                    <div class="product-element__rating"><b>Rating:</b> ${elem.rating}</div>
                    <div class="product-element__price">${elem.price} &#36</div>
                    <button class="product-element__btn">Buy</button>
                </li>`;
                });
            })
        }
};

