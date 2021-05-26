const hexarray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E"];

const bgc = document.querySelector(".bgcolor");
const span = document.querySelector(".color");

const btn = document.querySelector(".btn");

btn.addEventListener("click", function(){
    let hexcode = '#'
    for(let i = 0 ; i < 6 ; i++){
        hexcode += hexarray[randomNumber()];
    }
    bgc.style.backgroundColor = hexcode;
    document.querySelector(".main").backgroundColor = hexcode;
    span.textContent = hexcode;
    
});

function randomNumber(){
    return Math.floor(Math.random()*hexarray.length);
}