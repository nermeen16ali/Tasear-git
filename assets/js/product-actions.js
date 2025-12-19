document.addEventListener('DOMContentLoaded', () => {

    function toggleActive(selector) {
        document.querySelectorAll(selector).forEach(btn => {
            btn.addEventListener('click', function () {
                this.classList.toggle('active');
            });
        });
    }
    toggleActive('.fav-btn');
});
