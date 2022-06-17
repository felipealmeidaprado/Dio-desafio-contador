
let CURRENTNUMBER = document.getElementById("currentNumber")
let count = 0



const INCREMENT = document.getElementById("adicionar")
const DECREMENT = document.getElementById("subtrair")


INCREMENT.addEventListener("click" ,
function increments() {
    count++; count <= 10 ? CURRENTNUMBER.innerHTML = count :CURRENTNUMBER

    count >= 0? CURRENTNUMBER.classList.remove("negative"):CURRENTNUMBER  
    
}
)

DECREMENT.addEventListener('click',
function decrement() {       
    count--;count >= -10 ? CURRENTNUMBER.innerHTML = count:CURRENTNUMBER
    
    count < 0? CURRENTNUMBER.classList.add("negative"):CURRENTNUMBER
    
}
)
