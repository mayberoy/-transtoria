var hearts = document.querySelectorAll('.fa-heart');
for (i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click', function () {
        this.classList.toggle('likeskleur');
    })
}
