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

$('.inscription').on('click', (e) => {
    e.preventDefault();
    if ($('.password input').val() != $('.password-repeat input').val()) {
        Swal.fire({
            title: 'Les mots de passe ne correspondent pas',
            text: 'Veuillez réessayer.',
            icon: 'error',
            confirmButtonColor: '#4e6450',
            cancelButtonColor: '#808080'
        });
    } else if ($('.username input').val().length === 0) {
        Swal.fire({
            title: 'Le pseudo ne peut pas être vide',
            text: 'Veuillez réessayer.',
            icon: 'error',
            confirmButtonColor: '#4e6450',
            cancelButtonColor: '#808080'
        });
    } else if ($('.password input').val().length === 0 || $('.password-repeat input').val().length === 0) {
        Swal.fire({
            title: 'Le mot de passe ne peut pas être vide',
            text: 'Veuillez réessayer.',
            icon: 'error',
            confirmButtonColor: '#4e6450',
            cancelButtonColor: '#808080'
        });
    } else {
        Swal.fire({
            title: 'Inscription réussie',
            text: 'Vous allez être redirigé vers le jeu.',
            icon: 'success',
            confirmButtonColor: '#4e6450',
            cancelButtonColor: '#808080'
        });
        setTimeout(() => {
            window.location.href = 'chargement.html';
        }, 2000);
    }
});