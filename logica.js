const checkbox = document.querySelector('#modo-oscuro2');
const navbar = document.querySelector('.navbar');
const main = document.querySelector('main');
const body = document.body;

checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
    navbar.classList.add('dark-navbar');
    main.classList.add('dark-main');
    body.classList.add('dark');
} else {
    navbar.classList.remove('dark-navbar');
    main.classList.remove('dark-main');
    body.classList.remove('dark');
}
});


const images = document.querySelectorAll('.hover-imagen');

images.forEach(image => {
    image.addEventListener('mouseover', function() {
        image.style.transform = 'scale(1.1)';
        image.style.transition = 'transform 0.3s ease';
    });

    image.addEventListener('mouseout', function() {
        image.style.transform = 'scale(1)';
    });
});

function showMessage() {
    Swal.fire({
        title: 'Correo electrónico enviado exitosamente!',
        icon: 'success',
        confirmButtonText: 'Confirmar',
})
}