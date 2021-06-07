const btnsOpn = document.querySelectorAll(".open-window");
const btnsCls = document.querySelectorAll(".close-window");
const windows = document.querySelectorAll(".window");
const menuBody = document.querySelector(".menu__body");


//Отображение поп-ап меню при нажатии на INFO
for (let i = 0; i < btnsOpn.length; i++) {
    btnsOpn[i].addEventListener("click", function () {
        windows[i].style.visibility = "visible";
        btnsCls[i].addEventListener("click", function () {
            windows[i].style.visibility = "hidden";
        })
    })
}

//Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        if (iconMenu.classList.contains("_active")) {
        document.body.classList.remove("_lock");
        iconMenu.classList.remove("_active");
        menuBody.classList.remove("_active");
        }
    });
});

//Меню-бургер
const iconMenu = document.querySelector(".hamburger");
if (iconMenu){
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle("_lock");
        iconMenu.classList.toggle("_active");
        menuBody.classList.toggle("_active");
    });
}
