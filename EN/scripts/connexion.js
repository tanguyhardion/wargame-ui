document.getElementById('invite').addEventListener('click', function () {
    showUsernamePrompt('Choose a username :', 'question');
});

function showUsernamePrompt(message, icon) {
    Swal.fire({
        title: 'Continue as guest',
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
                showUsernamePrompt('Your username can\'t be empty.', 'error');
            }
        }
    });
}

function isValidUsername(username) {
    return username.length > 0;
}

function showUsernameConfirmation(username) {
    Swal.fire({
        title: 'Username saved !',
        text: 'Your username is : ' + username,
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
        title: 'Incorrect username or password',
        text: 'Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#4e6450',
        cancelButtonColor: '#808080'
    });
});

