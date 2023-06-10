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
            Swal.fire(
                'Pseudo enregistré !',
                'Votre pseudo est : ' + pseudo,
                'success'
            ).then(() => {
                window.location.href = 'PagePrincipale.html'; // Redirection vers une autre page HTML
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

