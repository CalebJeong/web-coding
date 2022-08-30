const LoginForm = document.querySelector("#login_form");
const LoginInput = document.querySelector("#login_form input");
const LoginButton = document.querySelector("#login_form button");
const greeting = document.querySelector(".greeting");

const LOCAL_STORAGE_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";
const saveUsername = localStorage.getItem(LOCAL_STORAGE_KEY);

function handleButtonClick(event){
    event.preventDefault();
    const username = LoginInput.value;
    LoginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(LOCAL_STORAGE_KEY, username);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


if(localStorage.getItem(LOCAL_STORAGE_KEY) === null){
    LoginForm.classList.remove(HIDDEN_CLASSNAME);
    LoginForm.addEventListener("submit", handleButtonClick);
}
else{
    greeting.innerText = `Hello ${saveUsername}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}