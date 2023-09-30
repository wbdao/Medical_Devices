//register
//
function register() {
    let user_name = document.querySelector("#username");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    if (user_name.value === "" || email.value === "" || password.value === "") {
        alert("please fill data");
    } else {
        localStorage.setItem('username', user_name.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
        setTimeout(() => {
            loginPage();
        }, 1500);

    }
};
//

function login() {
    let getUser = localStorage.getItem("username");
    let getPassword = localStorage.getItem("password");
    let user_name = document.querySelector("#username");
    let password = document.querySelector("#password");
    if (user_name.value === "" || password.value === "") {
        alert("please fill data");
    } else {
        if (
            user_name.value == getUser &&
            password.value == getPassword
        ) {
            setTimeout(() => {
                window.location = "index.html";
            }, 1500)
        } else {
            alert("username password is wrong");
        }
    }
}