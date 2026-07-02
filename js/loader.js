const loader = document.getElementById("loader");

const loaderName = document.getElementById("loader-name");

const role = document.getElementById("loader-role");

const logo = document.getElementById("loader-logo");

const tagline = document.getElementById("loader-tagline");

const fullName = "SITA RAMUDU";

let i = 0;

// Typing animation
function typeName(){

    if(i < fullName.length){

        loaderName.textContent += fullName.charAt(i);

        i++;

        setTimeout(typeName,120);

    }

    else{

        showRole();

    }

}

function showRole(){

    role.style.opacity="1";

    setTimeout(showLogo,800);

}

function showLogo(){

    loaderName.style.transition=".8s";
    role.style.transition=".8s";

    loaderName.style.opacity="0";
    role.style.opacity="0";

    setTimeout(()=>{

        loaderName.style.display="none";
        role.style.display="none";

        logo.classList.add("logo-show");

        tagline.style.opacity="1";

    },700);

    setTimeout(openPortfolio,1800);

}

function openPortfolio(){

    loader.classList.add("fade-out");

    setTimeout(()=>{

        loader.style.display="none";

    },800);

}

typeName();