/* Input Verif */
const form = document.querySelector("#form");
const email = document.querySelector("#email");
const text = document.querySelector("#text");
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function validation(){
    if (email.value.match(pattern)){
        email.style.borderColor = "#ffffff";
        email.style.color = "#9095a7";
        text.style.opacity = "0"
        text.innerHTML = "This block is empty";
    } else {
        email.style.borderColor = "#f25f3a";
        email.style.color = "#f25f3a";
        text.style.opacity = "1"
        text.innerHTML = "Please insert a valid email";
        text.style.color = "#f25f3a";
    }
    if(email.value == ""){
        email.style.borderColor = "#ffffff";
        email.style.color = "#9095a7";
        text.style.opacity = "0"
        text.innerHTML = "This block is empty";
    }
}

function validateForm(){
    let submit = true
    if (email.value == null || email.value == "") {
        nameError = "Please enter an email";
        text.style.color = "#f25f3a";
        text.style.opacity = "1";
        text.innerHTML = nameError;
        submit = false;
    } else {
        text.innerHTML = "This block is empty";
        text.style.opacity = "0";
        submit = true;
    }
   
    return submit
}


/* End Input Verif */

/* Hamburger Menu */
const body = document.querySelector('body')
const btnHamburger = document.querySelector('#btnHamburger')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElements = document.querySelectorAll('.has-fade')
const menuMobile = document.querySelector('#menuMobile')

btnHamburger.addEventListener('click', () => {
    if (header.classList.contains('open')) {
        header.classList.remove('open')
        fadeElements.forEach((el) => {
            el.classList.remove('fade-in')
            el.classList.add('fade-out')
        })
        overlay.classList.remove('fade-in')
        overlay.classList.add('fade-out')
        menuMobile.classList.remove('slide-in')
        menuMobile.classList.add('slide-out')
        body.classList.remove('noscroll')
    } else {
        header.classList.add('open')
        menuMobile.classList.add('slide-in')
        fadeElements.forEach((el) => {
            el.classList.add('fade-in')
            el.classList.remove('fade-out')
        })
        overlay.classList.add('fade-in')
        overlay.classList.remove('fade-out')
        menuMobile.classList.add('slide-in')
        menuMobile.classList.remove('slide-out')
        body.classList.add('noscroll')
    }
})

/* End Hamburger Menu */