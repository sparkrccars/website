const buyButtons = document.querySelectorAll(".btn");
    const popup = document.getElementById("successPopup");

    buyButtons.forEach(button => {
        button.addEventListener("click", function() {
            popup.style.display = "flex";
        });
    });

    function closePopup() {
        popup.style.display = "none";
    }


let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');

}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');

}

window.onscrol = () =>{
    menu.classList.remove('active');
    search.classList.remove('active');
}

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});