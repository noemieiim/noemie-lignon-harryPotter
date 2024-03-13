headerLi = document.querySelectorAll("header li");
iconsId = document.getElementById('icons');
header = document.querySelector('header')




iconsId.addEventListener("click", () => {
    header.classList.toggle("active")
})

headerLi.forEach((link) => {
    link.addEventListener("click", () => {
        header.classList.remove("active")
    })
})