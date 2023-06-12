VANTA.FOG({
    el: "#fog",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0xffffff,
    midtoneColor: 0xffffff,
    lowlightColor: 0xffffff,
    baseColor: 0x0,
    speed: 1.6
})

const audio = new Audio('../res/music/Dark Ambience Loop.mp3');
audio.loop = true;
$(window).on('click', () => {
    audio.play();
});

const vivus = new Vivus('logo', { duration: 150 });

$('.main-button.jouer').on('click', (e) => {
    e.preventDefault();
    setInterval(() => {
        audio.volume -= 0.02;
    }, 50);
    $('.transition').addClass('active');
    vivus.play(-1, () => {
        window.location.href = 'connexionEN.html';
    });
});
