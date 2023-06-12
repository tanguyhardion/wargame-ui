const audio = new Audio('../res/music/Loading Loop.wav');
audio.loop = true;
audio.play();

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
    'Decoration initialization...',
    'Character preparation...',
    'Loading music in progress...',
    'Making a delicious coffee...'
];

var current = 0;

setInterval(() => {
    addProgress(10);
    $('.txt').text(loadings[current++]);
}, 2000);

$('.progress').on('transitionend', () => {
    if (current === loadings.length) {
        setInterval(() => {
            audio.volume -= 0.03;
        }, 50);
        setTimeout(() => {
            window.location.href = 'PagePrincipaleEN.html';
        }, 2000);
    }
});
