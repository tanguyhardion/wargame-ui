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

const vivus = new Vivus('logo', { duration: 150 });

$('.main-button.jouer').on('click', (e) => {
    e.preventDefault();
    $('.transition').addClass('active');
    vivus.play(-1, () => {
        window.location.href = 'connexion.html';
    });
});