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
    revert: true
});

$('.troupes-container.reservistes img').draggable({
    revert: true
});

$('.troupes-container.vostroupes').droppable({
    drop: function (event, ui) {
        ui.draggable.appendTo($(this)).animate({
            top: 0,
            left: 0
        }, 'fast');
    }
});

// on tab change
$(".tabs-wrapper").on("tabsactivate", function (event, ui) {
    fillContainers();
});