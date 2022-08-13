const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");
// const link = document.querySelector("a");

const logoutForm = document.querySelector("#logout-form");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function paintGreetings(username) {
    if (username === undefined) {
        greeting.innerText = "";
        //greeting.classList.remove(HIDDEN_CLASSNAME);
    } else {
        greeting.innerText = `Hello  ${username}`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
    }

}

// function handlerButtonClick() {
//     const username = loginInput.value;
//     console.log(loginInput);
// }


function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    logoutForm.classList.remove(HIDDEN_CLASSNAME)
    const username = loginInput.value;
    loginInput.value = "";
    localStorage.setItem(USERNAME_KEY, username);

    paintGreetings(username);
}

function onLogoutSubmit(event) {
    event.preventDefault();
    logoutForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    paintGreetings();
    localStorage.removeItem(USERNAME_KEY);
}


const saveUsername = localStorage.getItem(USERNAME_KEY);
// console.log("saveUsername",saveUsername);


loginForm.addEventListener("submit", onLoginSubmit);
logoutForm.addEventListener("submit", onLogoutSubmit);

if (saveUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(saveUsername);
}

