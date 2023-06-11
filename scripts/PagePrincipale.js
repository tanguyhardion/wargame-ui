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

$('#dialog').dialog({
    autoOpen: false,
    width: 800,
    height: 500,
    modal: true,
    open: (event, ui) => {
        $('.ui-dialog-titlebar-close', ui.dialog | ui).hide();
    },
    show: {
        effect: 'fade',
        duration: 300
    },
    hide: {
        effect: 'fade',
        duration: 300
    },
    // activate close on  escape key press
    closeOnEscape: true,
});

$('.chat').on('click', function () {
    $('#dialog').dialog('open');
});

$('#close-btn').on('click', () => {
    $('#dialog').dialog('close');
});

$('.send-button').on('click', () => {
    const message = $('.chat-field input').val();
    if (message !== '') {
        $('.messages').append(`
        <div class="user-message">
            <div class="message">
                <span class="text">${message}</span>
                <img src="./res/images/profile-placeholder.jpg" alt="user_logo">
            </div>
        </div>`);
        $('.messages').scrollTop($('.messages').height());
        $('.chat-field input').val('');
    }
});