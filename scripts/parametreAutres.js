document.querySelectorAll('.audio .detail i').forEach(item => {
    item.addEventListener('click', function () {
        this.style.border = '2px solid #ddd';
        this.style.borderRadius = '50%';
        this.parentNode.parentNode.querySelectorAll('i').forEach(item => {
            if (item !== this) {
                item.style.border = 'none';
            }
        });

        if (this.id === 'mute') {
            sessionStorage.setItem('audio', 'mute');
        } else if (this.id === 'down' || this.id === 'up') {
            sessionStorage.setItem('audio', 'volume');
        }
    });
});

document.querySelector('#checkcross').checked = sessionStorage.getItem('tts') === 'false';

document.querySelector('#checkcross').addEventListener('click', function () {
    if (this.checked) {
        sessionStorage.setItem('tts', 'false');
    } else {
        sessionStorage.setItem('tts', 'true');
    }
});