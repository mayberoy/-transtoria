function toggleClass(element, className) {
    document.querySelector(element).addEventListener('click', function () {
        this.classList.toggle(className);
    })
}

toggleClass('.fa-heart', 'likeskleur');
