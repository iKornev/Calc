let inputA = document.getElementById('a')
let inputB = document.getElementById('b')

let multButton = document.getElementById('mult')
let devButton = document.getElementById('dev')
let plusButton = document.getElementById('plus')
let minusButton = document.getElementById('minus')
let powButton = document.getElementById('pow')
let biggerButton = document.getElementById('bigger')
let smallerButton = document.getElementById('smaller')

//Обработчики 
multButton.addEventListener('click',  multipie)
devButton.addEventListener('click',  devide)
plusButton.addEventListener('click',  plus)
minusButton.addEventListener('click',  minus)
smallerButton.addEventListener('click',  small)
biggerButton.addEventListener('click',  big)
powButton.addEventListener('click',  step)


//Валидность Инпутов 
inputA.addEventListener('keyup', checkA )
inputB.addEventListener('keyup', checkB )

function checkA (){
    let input =  Number(inputA.value)
    if (isNaN(input)) {
        inputA.style.color = 'red'
    }else{
        inputA.style.color = 'black'
    }
}

function checkB (){
    let input =  Number(inputB.value)
    if (isNaN(input)) {
        inputB.style.color = 'red'
    }else{
        inputB.style.color = 'black'
    }
}

//Проверяем значение на NaN
function NaNcheck (value){
    if(isNaN(value)){
        return document.getElementById("output").innerHTML = `Будь человеком, вводи цифры!!!`;
    }else {
        return document.getElementById("output").innerHTML = `Ответ: ${value.toFixed(2)}`;
    }
}

//Функции для мат. операций
function multipie (a,b) {
    a = +inputA.value
    b = +inputB.value
    let result = a*b
    NaNcheck(result)
}



function plus (a,b){  
    a = +inputA.value
    b = +inputB.value
    let result = a+b
    NaNcheck(result)
}

function minus (a,b){
    a = +inputA.value
    b = +inputB.value
    let result = a-b
    NaNcheck(result)
}


function devide (a,b){
    a = +inputA.value
    b = +inputB.value
    let result = a/b
    NaNcheck(result)
}

function small (a,b){
    a = +inputA.value
    b = +inputB.value
    let result;
    if(a > b){
        result = b 
    }else if(a < b){
        result = a 
    }
    NaNcheck(result)
}

function big (a,b){
    a = +inputA.value
    b = +inputB.value
    let result;
    if(a > b){
        result = a 
    }else if(a < b){
        result = b 
    }
    NaNcheck(result)
}

function step (a,b){
    a = +inputA.value
    b = +inputB.value
    let result = a**b
    NaNcheck(result)
}


// let calc =  (a, b, c) => {
//     return a(b,c)

// }


