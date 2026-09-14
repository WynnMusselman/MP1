let num1 = document.getElementById("first").value;
let num2 = document.getElementById("second").value;
let output = document.getElementById("output");

function doAdd(){
    output.innerHTML = String(Number(num1) + Number(num2));
}

function doSub(){
    output.innerHTML = String(Number(num1) - Number(num2));
}


function doMul(){
    output.innerHTML = String(Number(num1) * Number(num2));
}


function doDiv(){
    output.innerHTML = String(Number(num1) / Number(num2));
}

function doPow(){
    for(let i = 0; i < num2; i++){
        num1 = Number(num1) * Number(num1)
    }
    output.innerHTML = String(num1);
}

function doClear(){
    document.getElementById("first").innerHTML = "";
    document.getElementById("second").innerHTML = "";
}