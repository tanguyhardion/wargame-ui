document.getElementById('invite').addEventListener('click', function () {
    showUsernamePrompt('Please choose a valid login :', 'question');
});

function showUsernamePrompt(message, icon) {
    Swal.fire({
        title: 'Continue as a guest',
        text: message,
        input: 'text',
        icon: icon,
        showCancelButton: true,
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        confirmButtonColor: '#4e6450',
        cancelButtonColor: '#808080'
    }).then((result) => {
        if (result.isConfirmed) {
            const pseudo = result.value;
            if (isValidUsername(pseudo)) {
                showUsernameConfirmation(pseudo);
            } else {
                showUsernamePrompt('Please choose a valid login.', 'error');
            }
        }
    });
}

function isValidUsername(username) {
    return username.length > 0;
}

function showUsernameConfirmation(username) {
    Swal.fire({
        title: 'Login registered !',
        text: 'Your login is : ' + username,
        icon: 'success',
        confirmButtonColor: '#4e6450',
        cancelButtonColor: '#808080'
    }).then(() => {
        window.location.href = 'chargementEN.html';
    });
}

document.querySelector('.connexion').addEventListener('click', (e) => {
    e.preventDefault();
    Swal.fire({
        title: 'Incorrect password or login',
        text: 'Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#4e6450',
        cancelButtonColor: '#808080'
    });
});

