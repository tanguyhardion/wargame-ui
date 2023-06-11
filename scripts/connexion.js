document.getElementById('invite').addEventListener('click', function () {
    Swal.fire({
        title: 'Continuer en tant qu\'invité',
        text: 'Veuillez choisir un pseudo :',
        input: 'text',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'OK',
        cancelButtonText: 'Annuler',
        confirmButtonColor: '#4e6450',
        cancelButtonColor: '#808080'
    }).then((result) => {
        if (result.isConfirmed) {
            const pseudo = result.value;
            Swal.fire({
                title: 'Pseudo enregistré !',
                text: 'Votre pseudo est : ' + pseudo,
                icon: 'success',
                confirmButtonColor: '#4e6450',
                cancelButtonColor: '#808080'
            }).then(() => {
                window.location.href = 'PagePrincipale.html';
            });
        }
    });
});

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

