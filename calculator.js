let num1;
let num2;
let result;
let output = document.getElementById("output");

function createNums(){
    num1 = document.getElementById("first").value;
    num2 = document.getElementById("second").value;
}

function doAdd(){
    createNums();
    result = Number(num1) + Number(num2);
    ifNegative(result);

    output.innerHTML = String(result);
}

function doSub(){
    createNums();
    result = Number(num1) - Number(num2);
    ifNegative(result);
    output.innerHTML = String(result);
}


function doMul(){
    createNums();
    result = Number(num1) * Number(num2);
    ifNegative(result);
    output.innerHTML = String(result);
}


function doDiv(){
    createNums();
    result = Number(num1) / Number(num2);
    ifNegative(result);
    output.innerHTML = String(result);
}

function doPow(){
    createNums();
    result = 1;

    for(let i = 0; i < num2; i++){
         result = Number(num1) * Number(result)
    }
    ifNegative(result);
    output.innerHTML = String(result);
}

function doClear(){
    num1 = document.getElementById("first");
    num2 = document.getElementById("second");
    num1.value = "";
    num2.value = "";
    output.innerHTML = "";
}

function ifNegative(value){
    if(value < 0){
        output.style.color = "red";
    }
    else{
        output.style.color = "black";
    }
}