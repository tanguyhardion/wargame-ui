Swal.fire({
    title: 'Accueil',
    text: 'Bienvenue dans le jeu ! Souhaites-tu avoir une visite de la page d\'accueil?',
    icon: 'info',
    showCancelButton: true,
    confirmButtonText: 'Oui',
    cancelButtonText: 'Non',
    confirmButtonColor: '#4e6450',
    cancelButtonColor: '#808080'
}).then((result) => {
    if (result.isConfirmed) {
        introJs().start();
    }
});

$('#start-game').click((e) => {
    e.preventDefault();
    const vivus = new Vivus('logo', { duration: 70 });
    vivus.finish().play(-1, () => {
        window.location.href = 'choixProgramme.html';
    });
});