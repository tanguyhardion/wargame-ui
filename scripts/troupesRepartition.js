for (var i = 0; i < 15; i++) {
    $('.troupes-container').first().append('<img src="./res/images/soldats/casque_soldat.png" alt="helmet_logo" draggable="true">');
}

for (var i = 0; i < 4; i++) {
    $('.troupes-container').first().append('<img src="./res/images/soldats/casque_elite.png" alt="helmet_logo" draggable="true">');
}

$('.troupes-container').first().append('<img src="./res/images/soldats/casque_maitre.png" alt="helmet_logo" draggable="true">');

$('.troupes-container img').draggable({
    revert: true
});

$('.zone').droppable({
    drop: function (event, ui) {
        ui.draggable.appendTo($(this).find('.zone-container')).animate({
            top: 0,
            left: 0
        }, 'fast');
    }
});

// when items are dropped in the reservistes zone, change the text of the span to the number of items in the zone
$('.zone.reservistes > div').on('DOMSubtreeModified', (event, ui) => {
    const reservistes = $('.zone.reservistes > div').children().length;
    $('.zone.reservistes > span').text(`Réservistes (${reservistes} / 5)`);
});

document.addEventListener('DOMContentLoaded', () => {
    const showPopup = localStorage.getItem('showPopup') !== 'false';
  
    if (showPopup) {
      Swal.fire({
        title: 'Information',
        html: 'Vous devez répartir 15 combattants sur les 5 zones de combat et choisir 5 réservistes qui n\'iront pas combattre tout de suite mais pourront être déployés plus tard. Les combattants peuvent être glissés-déposés dans la zone souhaitée.',
        icon: 'info',
        showCancelButton: false,
        showCloseButton: false,
        confirmButtonText: 'OK',
        allowOutsideClick: false,
        allowEscapeKey: false,
        showCheckbox: true,
        inputPlaceholder: 'Ne plus afficher ce message',
        input: 'checkbox',
        inputValue: 0,
      }).then((result) => {
        if (result.isConfirmed) {
          const isChecked = result.value;
          if (isChecked) {
            localStorage.setItem('showPopup', 'false');
          }
        }
      });
    }
  });
  