const splide = new Splide('.splide', {
    type: 'loop',
    width: '90%',
    padding: '50px',
    wheel: true,
    perPage: 5,
    focus: 'center',
    isNavigation: true,
    pagination: false,
});

splide.on('active', (slide) => {
    slide.slide.classList.add('current-program');
});

splide.on('inactive', (slide) => {
    slide.slide.classList.remove('current-program');
});

Swal.fire({
    title: 'Choisissez votre programme !',
    text: 'Pour passer au programme suivant plus rapidement, vous pouvez utiliser les flèches du clavier. Pour passer à la page suivante, appuyez sur la touche Entrée ou Espace.',
    icon: 'info',
    showCancelButton: true,
    confirmButtonText: 'Oui',
    cancelButtonText: 'Non',
    confirmButtonColor: '#4e6450',
    cancelButtonColor: '#808080'
});

splide.mount();

function nextWindow() {
    window.location.href = 'troupesParametrage.html';
}

$('.next-button').on('click', () => {
    nextWindow();
});

$('.icon-button').on('click', () => {
    const random = Math.floor(Math.random() * splide.length);
    splide.go(`>${random}`);
});

Mousetrap.bind('right', () => {
    splide.go('>');
});

Mousetrap.bind('left', () => {
    splide.go('<');
});

Mousetrap.bind(['space', 'enter'], () => {
    nextWindow();
});
