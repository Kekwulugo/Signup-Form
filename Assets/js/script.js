let submitBtn = document.querySelector("button");
let passwordEl = document.querySelector(".password");
let passwordMatchEl = document.querySelector(".password1");
let feedbackEl = document.querySelector("#feedback");
let emailEl = document.querySelector("#email");
let phoneEl = document.querySelector("#phone");

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

emailEl.addEventListener("input", (event) =>{
 console.log(emailEl.validity.typeMismatch);
 if(emailEl.validity.typeMismatch){
  emailEl.setCustomValidity("I am expecting an email address!");
  
 } else {
  emailEl.setCustomValidity("");
 }
});

phoneEl.addEventListener('input', (event)=>{
 console.log("typing phone");
 console.log(phoneEl.validity.valid);
 if (phoneEl.validity.tooShort){
  phoneEl.setCustomValidity("Your phone number must be 10 characters");
 }else{
  phoneEl.setCustomValidity("");
 }
});

