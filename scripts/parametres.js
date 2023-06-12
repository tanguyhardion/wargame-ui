document.getElementById('audio').addEventListener('click', function () {
    Swal.fire({
        title: 'Attention',
        text: 'Quitter sans sauvegarder les modifications ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ok',
        cancelButtonText: 'Annuler',
        confirmButtonColor: '#4e6450',
        cancelButtonColor: '#808080'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'parametresAudio.html';
        }
    });
});

document.getElementById('accessibilite').addEventListener('click', function () {
    Swal.fire({
        title: 'Attention',
        text: 'Quitter sans sauvegarder les modifications ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ok',
        cancelButtonText: 'Annuler',
        confirmButtonColor: '#4e6450',
        cancelButtonColor: '#808080'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'parametresAccessibilite.html';
        }
    });
});

document.getElementById('langue').addEventListener('click', function () {
    Swal.fire({
        title: 'Attention',
        text: 'Quitter sans sauvegarder les modifications ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ok',
        cancelButtonText: 'Annuler',
        confirmButtonColor: '#4e6450',
        cancelButtonColor: '#808080'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'parametresLangues.html';
        }
    });
});

document.getElementById('appliquer').addEventListener('click', function () {
    Swal.fire({
        title: 'Confirmation',
        text: 'Modifications appliquées',
        icon: 'success',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#4e6450',
    });
});

