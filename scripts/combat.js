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
    width: '80%',
    height: 700,
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