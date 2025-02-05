/*Name this external file gallery.js*/

function upDate(previewPic){
    console.log("Mouse sobre a imagem", previewPic.src);
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo() {
    console.log("Mouse saiu da imagem");
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}