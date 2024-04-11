
var buttons = document.querySelectorAll('.card #read_button');


buttons.forEach(function (button) {
    button.addEventListener('click', function () {

        var card = this.closest('.card');


        card.classList.toggle('active');
        if (card.classList.contains('active')) {
            button.textContent = 'Leia Menos';
        } else {
            button.textContent = 'Leia Mais';
        }
    });
});
