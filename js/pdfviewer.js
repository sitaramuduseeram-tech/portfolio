// ============================
// PDF Viewer
// ============================

const pdfModal = document.getElementById("pdfModal");
const pdfFrame = document.getElementById("pdfFrame");

function openPDF(file){

    pdfFrame.src = file;

    pdfModal.style.display = "flex";

    document.body.style.overflow = "hidden";

}

function closePDF(){

    pdfModal.style.display = "none";

    pdfFrame.src = "";

    document.body.style.overflow = "auto";

}

// Close on background click

pdfModal.addEventListener("click", function(e){

    if(e.target === pdfModal){

        closePDF();

    }

});

// ESC key

document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        closePDF();

    }

});