let submitBtn = document.querySelector("button");
let passwordEl = document.querySelector(".password");
let passwordMatchEl = document.querySelector(".password1");
let feedbackEl = document.querySelector("#feedback");
let matchEl = document.querySelector("#match");
let emailEl = document.querySelector("#email");
let phoneEl = document.querySelector("#phone");
let accountEl = document.querySelector("#account");
let rightContainer = document.querySelector(".right-container");

submitBtn.addEventListener("click", ()=>{
 console.log("clicked");

 if (passwordEl.value === "" || passwordMatchEl === ""){
 
  passwordEl.classList = "error";
  passwordMatchEl.classList = "error";
  feedbackEl.innerText = "*Password cannot be blank!"

 } else if (passwordEl.value !== passwordMatchEl.value) {
  passwordEl.classList = "error";
  passwordMatchEl.classList = "error";
  feedbackEl.innerText = " *password must match!"
  
 } else{
  console.log("Passwords Match");
  feedbackEl.innerText = "*"
  passwordEl.classList = "password";
  passwordMatchEl.classList = "password";

  let sucessMessage = document.createElement("p");
  sucessMessage.setAttribute("id", "account");
  sucessMessage.style.color = "green";
  sucessMessage.innerText = "Congrats your response has been submitted!"
  
  submitBtn.remove();
  accountEl.remove();
  rightContainer.appendChild(sucessMessage);
  




 }

})

//live password validation

passwordMatchEl.addEventListener('input',(event)=>{
 if(passwordEl.value !== passwordMatchEl.value){
  matchEl.innerHTML = " *password does not match";
  passwordEl.classList = "error";
  passwordMatchEl.classList = "error";

 } else {
  matchEl.innerHTML = "*";
  passwordEl.classList = "password";
  passwordMatchEl.classList = "password";

 }
})

