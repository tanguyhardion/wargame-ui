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
        sessionStorage.setItem('tts', !checkcross.checked);
        if (!checkcross.checked) {
            Swal.fire({
                title: 'Synthèse vocale activée',
                text: "Vous venez d'activer la synthèse vocale. Vous pouvez désormais sélectionner à l'aide de la souris les textes que vous voulez entendre, puis cliquer sur Listen et sur l'icône pour lancer la transcription.",
                icon: 'success',
                showCancelButton: true,
                confirmButtonColor: '#4e6450',
                cancelButtonColor: '#808080'
            });
        }
    });
}

const langswitch = document.querySelector(".lang-switch");

if (langswitch) {

    if (sessionStorage.getItem('lang') === 'en') {
        langswitch.value = 'en';
    } else if (sessionStorage.getItem('lang') === 'fr') {
        langswitch.value = 'fr';
    }

    langswitch.addEventListener("change", () => {
        if (langswitch.value === 'en') {
            Swal.fire({
                title: 'Are you sure?',
                text: "You will be redirected to the English version of the game.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#4e6450',
                cancelButtonColor: '#808080'
            }).then((result) => {
                if (result.isConfirmed) {
                    sessionStorage.setItem('lang', 'en');
                    window.location.href = "EN/index.html";
                }
            });
        } else if (langswitch.value === 'fr') {
            Swal.fire({
                title: 'Êtes-vous sûr ?',
                text: "Vous serez redirigé vers la version française du jeu.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#4e6450',
                cancelButtonColor: '#808080'
            }).then((result) => {
                if (result.isConfirmed) {
                    sessionStorage.setItem('lang', 'fr');
                    window.location.href = "../index.html";
                }
            });
        }
    });
}