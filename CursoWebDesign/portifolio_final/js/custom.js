// nav menu style
var nav = $("#navbarSupportedContent");
var btn = $(".custom_menu-btn");
btn.click
btn.click(function (e) {

    e.preventDefault();
    nav.toggleClass("lg_nav-toggle");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style")
});


function getCurrentYear() {
    var d = new Date();
    var currentYear = d.getFullYear()

    $("#displayDate").html(currentYear);
}

getCurrentYear();

// Obtém o modal
var modal = document.getElementById("myModal");

// Obtém o link que abre o modal
var btn = document.getElementById("openModal");

// Obtém o elemento de fechar (X)
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clica no link, abre o modal
btn.onclick = function(event) {
  event.preventDefault(); // Evita a navegação
  modal.style.display = "block";
}

// Quando o usuário clica no "X", fecha o modal
span.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clica fora do modal, fecha-o
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}