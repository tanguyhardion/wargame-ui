const audio = new Audio('../res/music/Dark Descent.mp3');
audio.loop = true;
audio.play();

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
        stopSimulation();
        isSimulationLaunched = false;
    } else {
        $('#launch-simulation img').css('filter', 'contrast(0)');
        launchSimulation();
        isSimulationLaunched = true;
    }
});

var accent = 61;
var simulation;

function launchSimulation() {
    $('.health.user .value').css('width', '100%');
    $('.health.user .value').css('background', `rgb(${accent}, 255, ${accent})`);
    $('.health:not(.user) .value').css('width', '100%');
    $('.health:not(.user) .value').css('background', `rgb(120, 120, 120)`);

    simulation = setInterval(() => {
        for (let i = 0; i < 20; i++) {
            $('.health .value').eq(i).css('width', `${Math.floor(Math.random() * 100)}%`);
        }
    }, Math.random() * 1000 + 600);
}

function stopSimulation() {
    clearInterval(simulation);
    Swal.fire({
        title: 'BDE contrôlé !',
        text: 'Vous pouvez maintenant fermer la carte et faire vos sournois mouvements de troupes.',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#4e6450'
    });
}