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
            title: 'Login cannot be empty',
            text: 'Please try again.',
            icon: 'error',
            confirmButtonColor: '#4e6450',
            cancelButtonColor: '#808080'
        });
    } else if ($('.password input').val().length === 0 || $('.password-repeat input').val().length === 0) {
        Swal.fire({
            title: 'Password cannot be blank',
            text: 'Please try again.',
            icon: 'error',
            confirmButtonColor: '#4e6450',
            cancelButtonColor: '#808080'
        });
    } else {
        Swal.fire({
            title: 'Successful registration',
            text: 'You will be redirected to the game.',
            icon: 'success',
            confirmButtonColor: '#4e6450',
            cancelButtonColor: '#808080'
        });
        setTimeout(() => {
            window.location.href = 'chargementEN.html';
        }, 2000);
    }
});