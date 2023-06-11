function addProgress(progress) {
    const progressBar = $('.progress');
    const currentWidth = parseFloat(progressBar.css('width'));
    const newWidth = currentWidth + progress;

    if (newWidth <= 100) {
        progressBar.css('width', `${newWidth}%`);
    } else {
        progressBar.css('width', '100%');
    }
}

var loadings = [
    'Initialisation du décor...',
    'Préparation des personnages...',
    'Chargement des musiques en cours...',
    'Réalisation d\'un délicieux café...'
];

var current = 0;

setInterval(() => {
    addProgress(10);
    $('.txt').text(loadings[current++]);
}, 2000);

$('.progress').on('transitionend', () => {
    if (current === loadings.length) {
        setTimeout(() => {
            window.location.href = 'PagePrincipale.html';
        }, 1000);
    }
});