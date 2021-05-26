const colors = ["cadetblue", "red", "green", "teal", "#222222", "#f12365"];

const bgc = document.querySelector(".bgcolor");
const span = document.querySelector(".color");

const btn = document.querySelector(".btn");

btn.addEventListener("click", function(){
    const rm = randomNumber();
    bgc.style.backgroundColor = colors[rm];
    span.textContent = colors[rm];
    
});

function randomNumber(){
    return Math.floor(Math.random()*colors.length);
}