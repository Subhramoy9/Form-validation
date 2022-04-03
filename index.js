
let signin = document.getElementById("login");
let signup = document.getElementById("signup");
let logout = document.getElementById("logout");


let container1 = document.getElementById("container1");
container1.style.opacity = "0";
let container2 = document.getElementById('container2');
let container3 = document.getElementById("container3");
container3.style.opacity = "0";

let container4 = document.getElementById("container4");
container4.style.opacity = "0";

//for signup form
signup.addEventListener('click', () => {
    let user = document.getElementById("user");
    let pass = document.getElementById("pass");
    let reenter = document.getElementById("pass2");

    if (user.value === '') {
        return alert('pls enter the username');
    }
    else {

        if (localStorage.getItem('user') == null) {
            localStorage.setItem('user', '[]');
        }

        var oldData = JSON.parse(localStorage.getItem('user'));
        if (oldData.includes(user.value)) {
            alert('This user name already exists');
        }
        else {
            oldData.push(user.value);
            localStorage.setItem('user', JSON.stringify(oldData));
        }
    }



    if (pass.value === '') {
        return alert('pls enter the password');
    }
    if (reenter.value < 10) {
        return alert('The password must be of at least 10 characters');
    }
    if (reenter.value === '') {
        return alert('pls re-enter password');
    }
    else if (reenter.value != pass.value) {
        return alert('hey there check what u have re-entered!');
    }

    else {

        if (localStorage.getItem('pass') == null) {
            localStorage.setItem('pass', '[]');
        }
        var oldPass = JSON.parse(localStorage.getItem('pass'));
        if (oldPass.includes(reenter.value)) {
            return alert("Sorry acc already exists")
        }
        else {
            oldPass.push(pass.value);
            localStorage.setItem('pass', JSON.stringify(oldPass));

            alert('Account Created');
            container2.style.opacity = "0";
            container1.style.opacity = "1";
        }
    }
    user.value = '';
    pass.value = '';
    reenter.value = '';
})

//for the signin form
signin.addEventListener('click', () => {

    let userName = document.getElementById("userName");
    let password = document.getElementById("password");
    let user = JSON.parse(localStorage.getItem("user"));

    var pass = JSON.parse(localStorage.getItem("pass"));

    console.log(pass);


    if (userName.value === '') {
        return alert('Enter user name');
    }

    if (password.value === '') {
        return alert('Enter the password');
    }



    if (user.includes(userName.value) && pass.includes(password.value)) {
        container3.style.opacity = "1";
        container1.style.opacity = "0";
        return alert('Success');

    }
    else {
        return alert('Wrong combination of password or username');
    }
})

//For student credentials

let submit = document.getElementById("submit");
submit.addEventListener('click', (e) => {

    let stdname = document.getElementById("stdname");
    let height = document.getElementById("height");
    let age = document.getElementById("age");

    if (stdname.value === '' || height.value === '' || age.value === '') {
        return alert('Fill up all the credentials');
    }
    else {
        e.preventDefault();
        sessionStorage.setItem("name", stdname.value);
        sessionStorage.setItem("height", height.value);
        sessionStorage.setItem("age", age.value);

        let name = sessionStorage.getItem("name");
        let height1 = sessionStorage.getItem("height");
        let age1 = sessionStorage.getItem("age");

        document.getElementById('name').innerHTML = name;
        document.getElementById('ht').innerHTML = height1;
        document.getElementById('ag').innerHTML = age1;

        container3.style.opacity = "0";
        container4.style.opacity = "1";
    }

})

let redirect = document.getElementById('redirect');

redirect.addEventListener('click', () => {
    container2.style.opacity = "0";
    container1.style.opacity = "1";
})

let redirect1 = document.getElementById('redirect1');

redirect1.addEventListener('click', () => {
    container1.style.opacity = "0";
    container2.style.opacity = "1";
})

logout.addEventListener('click', () => {
    sessionStorage.clear();
    container1.style.opacity = "1";
    container2.style.opacity = "0";
    container3.style.opacity = "0";
    container4.style.opacity = "0";
    userName.value = '';
    password.value = '';
})