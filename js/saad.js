let box = document.querySelector("div")
let input = document.querySelector("input")

input.addEventListener("input" , () =>{
    box.style.borderRadius = input.value;
    box.style.backgroundColor= input.value;
})