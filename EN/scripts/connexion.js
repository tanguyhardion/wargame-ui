document.getElementById('invite').addEventListener('click', function () {
    showUsernamePrompt('Veuillez choisir un pseudo :', 'question');
});

function showUsernamePrompt(message, icon) {
    Swal.fire({
        title: 'Continuer en tant qu\'invité',
        text: message,
        input: 'text',
        icon: icon,
        showCancelButton: true,
        confirmButtonText: 'OK',
        cancelButtonText: 'Annuler',
        confirmButtonColor: '#4e6450',
        cancelButtonColor: '#808080'
    }).then((result) => {
        if (result.isConfirmed) {
            const pseudo = result.value;
            if (isValidUsername(pseudo)) {
                showUsernameConfirmation(pseudo);
            } else {
                showUsernamePrompt('Veuillez choisir un pseudo valide.', 'error');
            }
        }
    });
}

function isValidUsername(username) {
    return username.length > 0;
}

function showUsernameConfirmation(username) {
    Swal.fire({
        title: 'Pseudo enregistré !',
        text: 'Votre pseudo est : ' + username,
        icon: 'success',
        confirmButtonColor: '#4e6450',
        cancelButtonColor: '#808080'
    }).then(() => {
        window.location.href = 'chargement.html';
    });
}

document.querySelector('.connexion').addEventListener('click', (e) => {
    e.preventDefault();
    Swal.fire({
        title: 'Mot de passe ou login incorrect',
        text: 'Veuillez réessayer.',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#4e6450',
        cancelButtonColor: '#808080'
    });
});

