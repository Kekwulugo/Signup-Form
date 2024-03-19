let submitBtn = document.querySelector("button");
let passwordEl = document.querySelector(".password");
let passwordMatchEl = document.querySelector(".password1");
let feedbackEl = document.querySelector("#feedback");

submitBtn.addEventListener("click", ()=>{
 console.log("clicked");

 if (passwordEl.value === "" || passwordMatchEl === ""){
 
  passwordEl.classList = "error";
  passwordMatchEl.classList = "error";
  feedbackEl.innerText = "*Password cannot be blank!"

 } else if (passwordEl.value !== passwordMatchEl.value) {
  passwordEl.classList = "error";
  passwordMatchEl.classList = "error";
  feedbackEl.innerText = "*Password must match!"
  
 } else{
  console.log("Passwords Match");
  feedbackEl.innerText = "*"
  passwordEl.classList = "password";
  passwordMatchEl.classList = "password";


 }

})