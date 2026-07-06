
document.addEventListener("DOMContentLoaded", () => {

    const themeToggle = document.getElementById("theme-toggle");

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const icon = themeToggle.querySelector("i");

        if(document.body.classList.contains("dark-mode")){
            icon.classList.replace("fa-moon","fa-sun");
        }else{
            icon.classList.replace("fa-sun","fa-moon");
        }

    });

});