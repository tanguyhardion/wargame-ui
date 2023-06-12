for (var i = 0; i < 15; i++) {
    $('.troupes-container').first().append('<img src="./res/images/soldats/casque_soldat.png" draggable="true">');
}

for (var i = 0; i < 4; i++) {
    $('.troupes-container').first().append('<img src="./res/images/soldats/casque_elite.png" draggable="true">');
}

$('.troupes-container').first().append('<img src="./res/images/soldats/casque_maitre.png" draggable="true">');

document.querySelectorAll('.troupes-container img').forEach((element) => {
    let rand = Math.floor(Math.random() * 3);
    let ia = rand === 0 ? 'Offensive' : rand === 1 ? 'Defensive' : 'Random';
    tippy(element, {
        content: `Strength : ${Math.floor(Math.random() * 10)} <br>
                Dexterity: ${Math.floor(Math.random() * 10)} <br>
                Resistance: ${Math.floor(Math.random() * 10)} <br>
                Constitution: ${Math.floor(Math.random() * 10)} <br>
                Initiative: ${Math.floor(Math.random() * 10)} <br>
                AI: ${ia}`,
        allowHTML: true,
        interactive: true
    });
});

$('.troupes-container img').draggable({
    containment: 'document',
    helper: 'clone',
    opacity: 0.70,
    zIndex: 10000,
    appendTo: "body"
});

$('.zone-container img').draggable({
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

$('.zone.reservistes > div').on('DOMSubtreeModified', (event, ui) => {
    const reservistes = $('.zone.reservistes .zone-container').children().filter('img').length;
    $('.zone.reservistes > span').text(`Reservists (${reservistes} / 5)`);
});

$('.next-button').on('click', () => {
    window.location.href = './combat.html';
});

document.addEventListener('DOMContentLoaded', () => {
    const showPopup = sessionStorage.getItem('showPopupRepartition') !== 'false';

    if (showPopup) {
        Swal.fire({
            title: 'Distribution',
            html: 'You have to allocate 15 fighters to the 5 combat zones and choose 5 reservists who will not fight immediately but can be deployed later. Fighters can be dragged and dropped into the desired area.',
            icon: 'info',
            showCancelButton: false,
            showCloseButton: false,
            confirmButtonText: 'OK',
            confirmButtonColor: '#4e6450',
            allowOutsideClick: false,
            allowEscapeKey: false,
            showCheckbox: true,
            inputPlaceholder: 'Do not display this message again',
            input: 'checkbox',
            inputValue: 0,
        }).then((result) => {
            if (result.isConfirmed) {
                const isChecked = result.value;
                if (isChecked) {
                    sessionStorage.setItem('showPopupRepartition', 'false');
                }
            }
        });
    }
});

$('.icon-button').on('click', () => {
    // get all troops in all zones
    const troops = [];
    $('.zone-container img').each((index, element) => {
        troops.push($(element).attr('src'));
    });

    // get all troops in reservistes zone
    const reservistes = [];
    $('.zone.reservistes .zone-container img').each((index, element) => {
        reservistes.push($(element).attr('src'));
    });

    const allTroops = troops.concat(reservistes);

    $('.zone-container').empty();

    allTroops.forEach((element) => {
        $('.troupes-container').first().append(`<img src="${element}" draggable="true">`);
    });

    // put 5 random reservistes in reservistes zone
    for (let i = 0; i < 5; i++) {
        const random = Math.floor(Math.random() * $('.troupes-container img').length);
        const randomElement = $('.troupes-container img').get(random);
        $(randomElement).appendTo($('.zone.reservistes .zone-container'));
    }

    $('.troupes-container img').each((index, element) => {
        $(element).appendTo($('.zone-container').get(Math.floor(Math.random() * 5)));
    });

    Swal.fire({
        title: 'Aléatoire',
        text: 'Troupes paramétrées aléatoirement avec succès !',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#4e6450'
    });
});