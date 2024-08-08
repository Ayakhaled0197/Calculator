
let circle = document.querySelector(".theme-circle")
let firstTheme = document.querySelector(".theme-1")
let secondTheme = document.querySelector(".theme-2")
let thirdTheme = document.querySelector(".theme-3")

let output = document.querySelector(".calculator-output h1")
let op = document.querySelectorAll(".calculator-body .btn-op")
let numbers = document.querySelectorAll(".calculator-body .btn-num")
let resetBtn = document.querySelector(".btn-reset")
let deleteBtn = document.querySelector(".btn-del")
let equal = document.querySelector(".btn-equal")


resetBtn.addEventListener("click" , resetValue)
op.forEach(operator => {
    operator.addEventListener('click' , showOperator )
})
numbers.forEach(number => {
    number.addEventListener("click", showNumber);
});
deleteBtn.addEventListener("click" , deleteValue)
equal.addEventListener("click" , showValue)

if(output.textContent.length >25){
    output.textContent = "Can't calculate this !"
}
function showNumber(e){
    let clickedNumber = e.target.textContent.trim();
    let lastChar = output.textContent.slice(-1); 
    if(['.'].includes(lastChar) && clickedNumber === '.') {
        return 
    }
    else{
        output.textContent+= clickedNumber;
    }
}
function deleteValue(){
    output.textContent = output.textContent.slice(0, -1);
}
function showOperator(e){
    let lastChar = output.textContent.slice(-1); 
    let clickedOperator = e.target.textContent.trim();
    if(['/' , 'x' , '+' , '-'].includes(lastChar)) {
        return
    }
    else {
        output.textContent += clickedOperator
    }
}
function showValue(){
    try {
        let expression = output.textContent.replace(/x/g, "*");
        let result = eval(expression)
        output.textContent = result;
    }catch(error){
        output.textContent = "ERROR"
    }
}

function resetValue(){
    output.textContent = '' 
}

firstTheme.addEventListener("click" , getFirstTheme)
function getFirstTheme(){
    firstTheme.appendChild(circle)
}

secondTheme.addEventListener("click" , getSecondTheme )
function getSecondTheme(){
    secondTheme.appendChild(circle)
}
thirdTheme.addEventListener("click" , getThirdTheme )
function getThirdTheme(){
    thirdTheme.appendChild(circle)
}
