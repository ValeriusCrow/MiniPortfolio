let btnsOpn = document.querySelectorAll(".open-window");
let btnsCls = document.querySelectorAll(".close-window");
let windows = document.querySelectorAll(".window");

for (let i = 0; i < btnsOpn.length; i++) {
    btnsOpn[i].addEventListener("click", function () {
        windows[i].style.visibility = "visible";
        btnsCls[i].addEventListener("click", function () {
            windows[i].style.visibility = "hidden";
        })
    })
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});