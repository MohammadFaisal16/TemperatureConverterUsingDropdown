let from,to;
let input,output;
let button = document.querySelector(".clear button")

function myFromSelector(sel) {
    from = sel.options[sel.selectedIndex].text;
}
function myToSelector(sel) {
    to = sel.options[sel.selectedIndex].text;
}

submit.addEventListener('click',function(){
    input =  fromdeg.value;
    input = parseFloat(input);
    if(from == 'Celcius')
        celcius();
    else if(from == 'Fahrenheit')
        fahrenheit();
    else
        kelvin();
    output = roundNumber(output);
    document.querySelector("#todeg").value = output;
})
function celcius(){
    if(to == 'Celcius'){
        output = input;
    }
    else if(to == 'Fahrenheit'){
        output = (input*(9/5))+32;
    }
    else if(to == 'Kelvin'){
        output = input+273.15;
    }
}
function fahrenheit(){
    if(to == 'Celcius'){
        output = (input-32)*(5/9);
    }
    else if(to == 'Fahrenheit'){
        output =  input;
    }
    else if(to == 'Kelvin'){
        output =  (input-32)*(5/9)+273.15;
    }
}
function kelvin(){
    if(to == 'Celcius'){
        output = input-273.15;
    }
    else if(to == 'Fahrenheit'){
        output = ((input-273.15)*(9/5))+32;
    }
    else if(to == 'Kelvin'){
        output = input;
    }
}

function roundNumber(val){
    return Math.round(val*100)/100;
}


button.addEventListener("click",function(){
    document.querySelector("#fromdeg").value = "";
    document.querySelector("#todeg").value = "";
})