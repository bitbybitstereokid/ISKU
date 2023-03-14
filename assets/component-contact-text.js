let btnTitel = document.querySelector(".option-form_title");
let dropDownList = document.querySelector(".option-form_dropdown-menu ul");
let itemsList = document.querySelectorAll(".option-form_dropdown-menu ul li");
let inputChose = document.querySelector(".option_form input");

btnTitel.addEventListener("click", function () {
    this.classList.toggle("_active");
    dropDownList.classList.toggle("_active");
})

itemsList.forEach((item) => {
    item.addEventListener("click", function () {
        dropDownList.classList.remove("_active");
        btnTitel.innerHTML = item.textContent;
        inputChose.setAttribute("value", item.textContent);
    })
})
