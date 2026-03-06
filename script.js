const menu = document.querySelectorAll(".menu");

menu.forEach(item => {

    item.addEventListener("click", function () {

        menu.forEach(link => link.classList.remove("active"));

        this.classList.add("active");

    });

});