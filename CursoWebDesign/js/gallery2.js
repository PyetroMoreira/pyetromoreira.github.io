window.onload = function() {
    console.log("Página carregada e script iniciado.");
    addTabFocus();
};

function addTabFocus() {
    let images = document.querySelectorAll(".preview");
    let display = document.getElementById("image");
    
    for (let i = 0; i < images.length; i++) {
        let img = images[i];
        img.setAttribute("tabindex", "0"); // Adiciona tabindex via JavaScript
        console.log(`Tabindex adicionado à imagem ${i + 1}`);

        img.addEventListener("mouseover", function() {
            updateDisplay(img);
        });
        
        img.addEventListener("focus", function() {
            updateDisplay(img);
        });
        
        img.addEventListener("mouseout", function() {
            resetDisplay();
        });
        
        img.addEventListener("blur", function() {
            resetDisplay();
        });
    }
}

function updateDisplay(img) {
    let display = document.getElementById("image");
    display.style.backgroundImage = `url('${img.src}')`;
    display.innerHTML = img.alt;
    console.log(`Imagem atualizada: ${img.alt}`);
}

function resetDisplay() {
    let display = document.getElementById("image");
    display.style.backgroundImage = "url('')";
    display.innerHTML = "Hover over an image below to display here.";
    console.log("Imagem resetada.");
}
