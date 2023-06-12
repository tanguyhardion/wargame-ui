if (sessionStorage.getItem('audio') !== 'mute') {
    const audio = new Audio('../res/music/Dark Descent.mp3');
    audio.loop = true;
    audio.play();
}

function fill(element) {
    $(element).empty();

    for (let i = 0; i < Math.floor((Math.random() * 4) + 1); i++) {
        $(element).append('<img src="./res/images/soldats/casque_soldat.png" draggable="true">');
        if (Math.random() > 0.5) {
            $(element).append('<img src="./res/images/soldats/casque_elite.png" draggable="true">');
        }
        if (Math.random() > 0.85) {
            $(element).append('<img src="./res/images/soldats/casque_maitre.png" draggable="true">');
        }
    }
}

function fillContainers() {
    fill('.troupes-container.vostroupes');
    fill('.troupes-container.redeployables');
    fill('.troupes-container.reservistes');
}

$(".tabs-wrapper").tabs();

fillContainers();

document.querySelectorAll('.troupes-container img').forEach((element) => {
    let rand = Math.floor(Math.random() * 3);
    let ia = rand === 0 ? 'Offensive' : rand === 1 ? 'Défensive' : 'Aléatoire';
    tippy(element, {
        content: `Force : ${Math.floor(Math.random() * 10)} <br>
                Dextérité: ${Math.floor(Math.random() * 10)} <br>
                Résistance: ${Math.floor(Math.random() * 10)} <br>
                Constitution: ${Math.floor(Math.random() * 10)} <br>
                Inititative: ${Math.floor(Math.random() * 10)} <br>
                IA: ${ia}`,
        allowHTML: true,
        interactive: true
    });
});

$('.troupes-container.redeployables img').draggable({
    containment: 'document',
    helper: 'clone',
    opacity: 0.70,
    zIndex: 10000,
    appendTo: "body"
});

$('.troupes-container.reservistes img').draggable({
    containment: 'document',
    helper: 'clone',
    opacity: 0.70,
    zIndex: 10000,
    appendTo: "body"
});

$('.troupes-container.vostroupes').droppable({
    drop: function (event, ui) {
        ui.draggable.appendTo($(this)).animate({
            top: 0,
            left: 0
        }, 'fast');
    }
});

$(".tabs-wrapper").on("tabsactivate", function (event, ui) {
    fillContainers();
});

$('#dialog').dialog({
    autoOpen: false,
    width: '90%',
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
    closeOnEscape: true,
});

$('.map').on('click', function () {
    $('#dialog').dialog('open');
});

$('#close-btn').on('click', () => {
    $('#dialog').dialog('close');
});

$('.icon-button.pret').one('click', () => {
    $('.icon-button.pret .material-symbols-outlined').html('hourglass_top');
    $('.icon-button.pret').css('background-color', '#707070')
    $('.icon-button.pret').css('color', '#0b0c10');
    $('.icon-button.pret').css('cursor', 'not-allowed');

    setInterval(() => {
        const hourglass = $('.icon-button .material-symbols-outlined').html();
        if (hourglass === 'hourglass_top') {
            $('.icon-button.pret .material-symbols-outlined').html('hourglass_bottom');
        } else {
            $('.icon-button.pret .material-symbols-outlined').html('hourglass_top');
        }
    }, 750);
});

var icon = false;

$('.icon-button.treve').on('click', () => {
    if (!icon) {
        $('.icon-button.treve .material-symbols-outlined').html('verified_user');
        $('.icon-button.treve').css('background', '#121212')
        $('.troupes').css('cursor', 'not-allowed');
        $('.troupes').css('background', '#606060');
        icon = true;
    } else {
        $('.icon-button.treve .material-symbols-outlined').html('gpp_bad');
        $('.icon-button.treve').css('background', '#707070')
        $('.troupes').css('cursor', 'default');
        $('.troupes').css('background', '#dcdcdc');
        icon = false;
    }
});

var isSimulationLaunched = false;

$('#launch-simulation img').on('click', () => {
    if (isSimulationLaunched) {
        $('#launch-simulation img').attr('src', 'https://cdn-icons-png.flaticon.com/128/527/527995.png');
        stopSimulation();
        isSimulationLaunched = false;
    } else {
        $('#launch-simulation img').attr('src', 'https://cdn-icons-png.flaticon.com/128/4434/4434965.png');
        launchSimulation();
        isSimulationLaunched = true;
    }
});

var simulation;

function launchSimulation() {
    $('.health.user .value').css('width', '100%');
    $('.health.user .value').css('background', 'rgb(0, 230, 0)');
    $('.health:not(.user) .value').css('width', '100%');
    $('.health:not(.user) .value').css('background', 'rgb(120, 120, 120)');

    let width = 0;

    $('.health.user .value').on('resize', () => {
        let accent = 61 + (width * 1.88);
        $('.health.user .value').css('background', `rgb(${accent}, 255, ${accent})`);
        console.log("resize");
    });

    simulation = setInterval(() => {
        for (let i = 0; i < $('.health .value').length; i++) {
            width = Math.floor(Math.random() * 80 + 20);
            $('.health .value').eq(i).css('width', `${width}%`);
        }
        for (let i = 0; i < $('.zone-status .effectif span').length; i++) {
            const $value = $('.zone-status .effectif span').eq(i);
            $value.html("x " + Math.floor(Math.random() * 4 + 1));
        }
    }, Math.random() * 1000 + 500);

    setInterval(() => {
        for (let i = 0; i < $('.health.user .value').length; i++) {
            const $value = $('.health.user .value').eq(i);
            const width = $value.width();
            const maxWidth = $value.parent().width();
            const percent = (width / maxWidth) * 100;

            let red = Math.round(255 - (255 * (percent / 100)));
            let green = Math.round(255 * (percent / 100));
            let blue = 0;

            $value.css('background', `rgb(${red}, ${green}, ${blue})`);
        }
    }, 1000);
}



function stopSimulation() {
    clearInterval(simulation);
    $('.health:not(.user) .value').first().css('width', '0');
    Swal.fire({
        title: 'BDE contrôlé !',
        text: 'Vous pouvez maintenant fermer la carte et faire vos sournois mouvements de troupes.',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#4e6450'
    });
}