let products=[];
const bodyHtml = document.querySelector('body');
const pHtml = document.querySelector('p');
const headerHtml = document.querySelector('header');
const asideLeftHtml = document.querySelector('.aside-left');
const asideRightHtml = document.querySelector('.aside-right');
const mainContentHtml = document.querySelector('main');
const ulHtmlProduct = document.createElement('ul');
ulHtmlProduct.classList.add('product-container');
const inputForm = document.createElement('form');
inputForm.classList.add('product-options');

headerHtml.innerHTML += `
        <div class="div-input-search"><label for="search" class="label-search"></label>
        <input type="search" class="input-search" name="search" id="search">
        <button class = "search-btn">Search</button></div>
`;

let searchValue;
let searchResult = [];
let checkboxArr = [];
let productContent = [];
let productBasket = [];

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
        <div class = "div-checkbox"><input type="checkbox" class="checkbox" name="${elem}" id="${elem}">
        <label for="${elem}" class="label-checkbox">${elem}</label></div>
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
                    searchResult = [];
                    addProdToContent()
                }
            });
        });
    };
    checkboxCatch();
}

function addProdToContent(){ 
    mainContentHtml.append(ulHtmlProduct);
    if (checkboxArr.length==0 && searchResult.length==0){
        productContent = [];
        products.forEach(elem =>{
            productContent.push(elem);
            ulHtmlProduct.innerHTML += `
            <li class="product-element">
                <div class="product-element__title">${elem.title}</div>
                <img src="${elem.thumbnail}" class="product-element__thumbnail">
                <div class="product-element__description">${elem.description}</div>
                <div class="product-element__rating"><b>Rating:</b> ${elem.rating}</div>
                <div class="product-element__price">${elem.price} &#36</div>
                <button id = ${elem.id} class="product-element__btn">Buy</button>
            </li>`;
            });
            getBasket()
        } else if (checkboxArr.length>0) {
            productContent = [];
            checkboxArr.forEach(cat=>{
                productByCat[cat].forEach(elem =>{
                productContent.push(elem);
                ulHtmlProduct.innerHTML += `
                <li class="product-element">
                    <div class="product-element__title">${elem.title}</div>
                    <img src="${elem.thumbnail}" class="product-element__thumbnail">
                    <div class="product-element__description">${elem.description}</div>
                    <div class="product-element__rating"><b>Rating:</b> ${elem.rating}</div>
                    <div class="product-element__price">${elem.price} &#36</div>
                    <button id = ${elem.id} class="product-element__btn">Buy</button>
                </li>`;
                });
            });
        getBasket()

        } else if (searchResult.length>0){
            productContent = [];
            searchResult.forEach(elem=>{
                productContent.push(elem);
                ulHtmlProduct.innerHTML += `
                <li class="product-element">
                    <div class="product-element__title">${elem.title}</div>
                    <img src="${elem.thumbnail}" class="product-element__thumbnail">
                    <div class="product-element__description">${elem.description}</div>
                    <div class="product-element__rating"><b>Rating:</b> ${elem.rating}</div>
                    <div class="product-element__price">${elem.price} &#36</div>
                    <button id = ${elem.id} class="product-element__btn">Buy</button>
                </li>`;
                });
            getBasket()
            };

};

function getBasket (){
    
    let btnBuy = document.querySelectorAll('.product-element__btn');
   
    btnBuy.forEach(elem =>{
        elem.addEventListener('click', (e)=>{
            let id = e.target.id; 
            getBasketContent(id);
        });
    });

            
        function getBasketContent(id){
            if (id){
                    let prod = productContent.find(elem=>elem.id == id)
                    let res = productBasket.find(elem=>elem.id == prod.id)
                    if (res){
                        res.quantity+=1    
                    } else {
                        prod.quantity = 1;
                        productBasket.push(prod);
                        };
            } else productBasket.splice(0, productBasket.length);


            
                function basketRun(productBasket){
                    console.log(productBasket)
                    let basketContent = document.querySelector(".basket_content__product");
                    basketContent.innerHTML =``;
                    productBasket.forEach(elem=>{
                        basketContent.innerHTML += `<div class = "basket_poduct_name">${elem.title}:</div>
                                                    <div class="basket_poduct_price"> ${elem.price}&#36</div>
                                                    <input id="${elem.id}" type="number" value="${elem.quantity}"/>
                                                    <div class="basket_poduct_summary"> ${elem.price * elem.quantity}&#36</div>
                                                    `                         
                    });
              
    
                    let summaryBasket = productBasket.reduce((acc,curr)=>acc + (curr.price * curr.quantity),0);
                    let basketTotal = document.querySelector('.basket_total');
                    basketTotal.innerHTML = `Total order: <b>${summaryBasket}&#36</b>`;
                };
                basketRun(productBasket)

                let inputQuantity = document.querySelectorAll('input[type=number]');
                inputQuantity.forEach(elem =>{
                    elem.addEventListener('input', (e)=>{
                        let id = e.target.id;
                        console.log (e.target.value);
                            for (let elem of productBasket){
                                if (elem.id == id){
                                    elem.quantity= +e.target.value
                                    console.log (elem)
                                    basketRun(productBasket)
                                }
    
                            }
                        });
                        // console.log(res)
                    })
                // })

                let btnBsktReset = document.querySelector('.basket-reset');
                    btnBsktReset.addEventListener('click', ()=>{
                        getBasketContent(false)
        });

    }

};            

function getSearch () {
    let res
    let searchBtnHtml = document.querySelector('.search-btn');
    let searchInputHtml = document.querySelector('.input-search');

    searchInputHtml.addEventListener ('input', (e)=>{
            res = e.target.value;
    })
    searchBtnHtml.addEventListener('click', ()=>{
        if (res){
            searchValue = res;
            searchValue.toLowerCase();
            findProd(searchValue);
            searchInputHtml.value = "";
            res = "";
        } else {
            searchResult = [];
            ulHtmlProduct.innerHTML ='';
            addProdToContent();
        }
    })

    function findProd (inputRes){
        searchResult =[];
        ulHtmlProduct.innerHTML ='';
        let regExpSearch = /^\w{3,}.*/;
        products.filter((elem)=>{
            let title = elem.title.toLowerCase();
            if (title.includes(inputRes) && regExpSearch.test(inputRes)){
                searchResult.push(elem);
                searchInputHtml.placeholder  = 'good'
                setTimeout (()=>{searchInputHtml.placeholder  = ''}, 2000)
            } else if (!regExpSearch.test(inputRes)){
                searchInputHtml.placeholder  = 'at least 3 characters'
                setTimeout (()=>{searchInputHtml.placeholder  = 'try again'}, 2000)
            } 
            // else {
            //     searchInputHtml.placeholder  = 'nothing find'
            //     setTimeout (()=>{searchInputHtml.placeholder  = ''}, 2000)
            // }
        });
        addProdToContent();
    }
};
getSearch()









