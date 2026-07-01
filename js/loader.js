const text = "SITA RAMUDU";

const loaderName = document.getElementById("loader-name");
const loader = document.getElementById("loader");
const navbar = document.getElementById("navbar");

loaderName.textContent = "";

let index = 0;

function typeName(){

    if(index < text.length){

        loaderName.textContent += text.charAt(index);
        index++;

        setTimeout(typeName,180);

    }else{

        setTimeout(showLogo,1000);

    }
}

function showLogo(){

    loaderName.textContent = "SR";
    document.getElementById("loading-text").textContent = "Welcome";

    setTimeout(openPortfolio,1200);

}

function openPortfolio(){

    loader.style.display = "none";

    if(navbar){
        navbar.classList.remove("hidden");
    }

}

typeName();