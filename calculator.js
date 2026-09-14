let num1;
let num2;
let output = document.getElementById("output");

function createNums(){
    num1 = document.getElementById("first").value;
    num2 = document.getElementById("second").value;
}

function doAdd(){
    createNums();
    output.innerHTML = String(Number(num1) + Number(num2));
}

function doSub(){
    createNums();
    output.innerHTML = String(Number(num1) - Number(num2));
}


function doMul(){
    createNums();
    output.innerHTML = String(Number(num1) * Number(num2));
}


function doDiv(){
    createNums();
    output.innerHTML = String(Number(num1) / Number(num2));
}

function doPow(){
    createNums();
    let output_val = 1;

    for(let i = 0; i < num2; i++){
         output_val = Number(num1) * Number(output_val)
    }
    output.innerHTML = String(output_val);
}

function doClear(){
    num1 = document.getElementById("first");
    num2 = document.getElementById("second");
    num1.value = "";
    num2.value = "";
    output.innerHTML = "";
}