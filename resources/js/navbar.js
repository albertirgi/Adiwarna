document.querySelector('button').addEventListener('click', function() {
    var menuIcon = this.querySelector('.block');
    var closeIcon = this.querySelector('.hidden');

    menuIcon.classList.toggle('hidden');
    menuIcon.classList.toggle('block');

    closeIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('block');
});