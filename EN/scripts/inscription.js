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
        cancelButtonText: 'Annuler',
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

$('.inscription').on('click', (e) => {
    e.preventDefault();
    if ($('.password input').val() != $('.password-repeat input').val()) {
        Swal.fire({
            title: 'Passwords do not match',
            text: 'Please try again.',
            icon: 'error',
            confirmButtonColor: '#4e6450',
            cancelButtonColor: '#808080'
        });
    } else if ($('.username input').val().length === 0) {
        Swal.fire({
            title: 'Your username can\'t be empty',
            text: 'Please try again.',
            icon: 'error',
            confirmButtonColor: '#4e6450',
            cancelButtonColor: '#808080'
        });
    } else if ($('.password input').val().length === 0 || $('.password-repeat input').val().length === 0) {
        Swal.fire({
            title: 'Your password can\'t be empty',
            text: 'Please try again.',
            icon: 'error',
            confirmButtonColor: '#4e6450',
            cancelButtonColor: '#808080'
        });
    } else {
        Swal.fire({
            title: 'Sign up successful',
            text: 'You will now be redirected to the game.',
            icon: 'success',
            confirmButtonColor: '#4e6450',
            cancelButtonColor: '#808080'
        });
        setTimeout(() => {
            window.location.href = 'chargement.html';
        }, 2000);
    }
});