let string = "";
let button = document.querySelectorAll("button")
Array.from (button).forEach((button) => {
    button.addEventListener("click" , (saim)=>{

if(saim.target.innerHTML == "="){
    string = eval(string)
   
    document.querySelector(".input").value = string;

    
}
else if(saim.target.innerHTML == "C"){
    string = "";
    document.querySelector(".input").value = string;

}
else{
      console.log(saim.target);
      string = string + saim.target.innerHTML;
      document.querySelector(".input").value = string; }
   

   
      

    })
    
});


// AMOUNT 

