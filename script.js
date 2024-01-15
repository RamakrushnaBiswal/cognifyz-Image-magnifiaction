function enlargeImage(imgElement) {
    var popupContainer = document.getElementById('popup-container');
    var popupImg = document.getElementById('popup-img');

    popupImg.src = imgElement.src;
    popupImg.alt = imgElement.alt;

    popupContainer.style.display = 'block';
}

function closePopup() {
    var popupContainer = document.getElementById('popup-container');
    popupContainer.style.display = 'none';
}