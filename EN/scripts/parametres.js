document.getElementById('audio').addEventListener('click', function () {
    Swal.fire({
        title: 'Warning',
        text: 'Exit without saving changes ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
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
        title: 'Warning',
        text: 'Exit without saving changes ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
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
        title: 'Warning',
        text: 'Exit without saving changes ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
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
        title: 'Chanegs applied',
        text: 'You can now safely exit the settings.',
        icon: 'success',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#4e6450',
    });
});

