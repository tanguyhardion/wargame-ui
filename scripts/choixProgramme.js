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

splide.mount();

