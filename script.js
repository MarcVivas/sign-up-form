
const root = document.querySelector(":root");
const moaiBtn = document.querySelector("#moai");

function switchTheme(e){
    root.classList.toggle("dark");
}

moaiBtn.addEventListener("click", switchTheme);


const formBtn = document.querySelector("#btn");


const password1 = document.querySelector("#password");
const password2 = document.querySelector("#confirm_password");
const divPassword = document.querySelector("#divPassword");
const p = document.createElement("p");
divPassword.appendChild(p);

function checkPassword(e){
    if(password1.value !== password2.value){
        p.innerText = "* Passwords do not match";
        password1.classList.add("error");
        password2.classList.add("error");
    }

}

formBtn.addEventListener("click", checkPassword);