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
    title: 'Choose your program !',
    text: 'To move to the next program faster, you can use the arrows on the keyboard. To move to the next page, press Enter or Space.',
    icon: 'info',
    confirmButtonText: 'OK',
    confirmButtonColor: '#4e6450'
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
