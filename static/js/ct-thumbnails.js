function openModal(image) {
    var imageId = image.id;
    var modal = document.getElementById(imageId + "-modal");
    var img = document.getElementById(imageId);
    var modalImg = document.getElementById(imageId + "-modal-img");
    var captionText = document.getElementById(imageId + "-modal-caption");
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;

    var span = document.getElementById(imageId + "-modal-close");

    span.onclick = function() { 
        modal.style.display = "none";
    }
    modal.onclick = function() {
        modal.style.display = "none";
    }
    document.onkeydown = function(evt) { 
        if (evt && (evt.key === "Esc" || evt.key === "Escape")) {
            modal.style.display = "none";
        }
    }
}
