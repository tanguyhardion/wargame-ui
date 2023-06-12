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

const checkcross = document.querySelector('#checkcross');

if (checkcross) {
    checkcross.checked = sessionStorage.getItem('tts') === 'false';

    checkcross.addEventListener('click', () => {
        if (this.checked) {
            sessionStorage.setItem('tts', 'false');
        } else {
            sessionStorage.setItem('tts', 'true');
        }
    });
}

document.querySelector(".lang-switch").addEventListener("change", () => {
    if (document.querySelector(".lang-switch").value === 'en') {
        Swal.fire({
            title: 'Are you sure?',
            text: "You will be redirected to the English version of the game.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4e6450',
            cancelButtonColor: '#808080'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "/en/index.html";
            }
        });
    } else if (document.querySelector(".lang-switch").value === 'fr') {
        Swal.fire({
            title: 'Êtes-vous sûr ?',
            text: "Vous serez redirigé vers la version française du jeu.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4e6450',
            cancelButtonColor: '#808080'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "../index.html";
            }
        });
    }
});