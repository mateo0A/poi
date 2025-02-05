

let con1=localStorage.getItem('contador1')
let con2=localStorage.getItem('contador2')
let con3=localStorage.getItem('contador3')
let con14=localStorage.getItem('contador4')
 

console.log(parseFloat(con1));
console.log(parseFloat(con2));
console.log(parseFloat(con3));
console.log(parseFloat(con14));


let btn1=document.querySelector('.primCan')
let spna=document.querySelector('.con1')
btn1.addEventListener('click',()=>{
    spna.innerText=parseFloat(con1)
})
