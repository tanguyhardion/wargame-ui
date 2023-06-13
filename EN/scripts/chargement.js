const audio = new Audio('https://github.com/tanguyhardion/wargame-ui/raw/main/res/music/Loading%20Loop.wav');
if (sessionStorage.getItem('audio') !== 'mute') {
    audio.loop = true;
    audio.play();
}

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
    'Initialization of the scenery...',
    'Preparation of the characters...',
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
        console.log("redirection");
        setInterval(() => {
            audio.volume -= 0.03;
        }, 50);
        setTimeout(() => {
            window.location.href = 'PagePrincipale.html';
            console.log("redirected");
        }, 2000);
    }
    console.log("transitionend");
});
