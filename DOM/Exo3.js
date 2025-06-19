const button= document.getElementById("counter")
let count = 0
// console.log(button)
button.addEventListener("click",()=>{
      count++;
      button.textContent=count ;
});
button.innerText=count ;