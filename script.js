const sizeUp = document.querySelector(".sizeUp")
const sizeDown = document.querySelector(".sizeDown")
const colorBtn = document.querySelector(".color")
const p = document.querySelector("p")
let x = 36


const fun1 = () => {
    if (x > 50) return
    x += 5
    p.style.fontSize = `${x}px` 
    }

const fun2 = () => {
    if (x < 21) return
    x -= 5
    p.style.fontSize = `${x}px`
}

const fun3 = () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    p.style.color = "#" + randomColor
}

sizeUp.addEventListener("click", fun1)
sizeDown.addEventListener("click", fun2)
colorBtn.addEventListener("click", fun3)