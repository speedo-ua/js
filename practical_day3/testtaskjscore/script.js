const container = document.querySelector(".container");
const containerWidth= window.getComputedStyle(container).width;
const containerWhdthValue = parseFloat(containerWidth);
const btnStart=document.querySelector(".start");
const btnStop=document.querySelector(".stop");

const img = document.querySelector("img");


let valueLoader = 0;
let widthLoader = document.querySelector(".block");
widthLoader.style.width = 0 + "px";
let stop=true;

function loader (){
    widthLoader.style.width = valueLoader + "px";
    if (valueLoader==containerWhdthValue) {
        img.className = "imgvisible";
        console.log(img)
    }
    if (valueLoader==containerWhdthValue || stop) return stop=true;
    valueLoader++;
    timeOut();
};

function timeOut(){
    setTimeout(loader, 10);   
};


btnStart.addEventListener("click", ()=>{
    if (stop){
        timeOut();
        stop = false;
    };
    if (valueLoader==containerWhdthValue){
        img.className = "imghidden";
        widthLoader.style.width = 0 + "px";
        valueLoader = 0;
    };
    
});

btnStop.addEventListener("click", ()=>{
    stop = true;
});

