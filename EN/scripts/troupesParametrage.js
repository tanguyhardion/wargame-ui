var current = 0;

for (var i = 0; i < 15; i++) {
    $('.soldats-container').append('<img src="./res/images/soldats/casque_soldat.png" alt="helmet_logo">');
}

for (var i = 0; i < 4; i++) {
    $('.soldats-container').append('<img src="./res/images/soldats/casque_elite.png" alt="helmet_logo">');
}

$('.soldats-container').append('<img src="./res/images/soldats/casque_maitre.png" alt="helmet_logo">');

$('.soldats-container img')[0].classList.add('selected');

$('.soldats-container img').on('click', (element) => {
    const target = $(element.target);
    current = target.index();
    if (!target.hasClass('selected')) {
        target.toggleClass('selected');
        target.siblings().removeClass('selected');
    }
    const src = target.attr('src');
    if (src.includes('casque_soldat')) {
        $('.soldat img').attr('src', './res/images/soldats/soldat.png');
        $('.soldat .name').text('Soldier');
        $('.health-bar span').text('30 PV');
        const attributes = $('.attributes input');
        attributes.each((index, element) => {
            $(element).val(0);
        });
    } else if (src.includes('casque_elite')) {
        $('.soldat img').attr('src', './res/images/soldats/soldat_elite.png');
        $('.soldat .name').text('Elite soldier');
        $('.health-bar span').text('35 PV');
        const attributes = $('.attributes input');
        attributes.each((index, element) => {
            if ($(element).attr('name') === 'constitution') {
                $(element).val(5);
            } else {
                $(element).val(1);
            }
        });
    }
    else {
        $('.soldat img').attr('src', './res/images/soldats/maitre_de_guerre.png');
        $('.soldat .name').text('Master of war');
        $('.health-bar span').text('40 PV');
        const attributes = $('.attributes input');
        attributes.each((index, element) => {
            if ($(element).attr('name') === 'constitution') {
                $(element).val(10);
            } else {
                $(element).val(2);
            }
        });
    }
});

$('.arrow-container').on('click', (element) => {
    arrowAnimation(element);
});

function arrowAnimation(element) {
    let side = $(element.target).attr('class').split(' ')[1];
    let image = $('.soldat img');
    const sign = side === 'left' ? '-' : '';
    const inverseSign = side === 'left' ? '' : '-';
    current = side === 'left' ? current - 1 : current + 1;
    setTimeout(() => {
        if (current >= 15 && current < 19) {
            $('.soldat img').attr('src', './res/images/soldats/soldat_elite.png');
            $('.health-bar span').text('35 PV');
        } else if (current === 19) {
            $('.soldat img').attr('src', './res/images/soldats/maitre_de_guerre.png');
            $('.health-bar span').text('40 PV');
        } else {
            $('.soldat img').attr('src', './res/images/soldats/soldat.png');
            $('.health-bar span').text('30 PV');
        }
    }, 500);
    if (current >= 0) {
        $('.soldats-container img')[current].classList.add('selected');
        $('.soldats-container img').each((index, element) => {
            if (index !== current) {
                element.classList.remove('selected');
            }
        });
    }
    image.css('transform', `translateX(${inverseSign}300px)`);
    image.css('filter', 'brightness(0)');
    setTimeout(() => {
        image.css('opacity', '0');
    }, 250);
    setTimeout(() => {
        image.css('transform', `translateX(${sign}300px)`);
    }, 300);
    setTimeout(() => {
        image.css('transform', `translateX(0px)`);
        image.css('opacity', '1');
        image.css('filter', 'brightness(1)');
    }, 600);
}

$('.next').on('click', (element) => {
    let attribute = $(element.target).parent().attr('class').split(' ')[1];
    let input = $(`input[name=${attribute}]`);
    let value = parseInt(input.val());
    if (value < $(element.target).siblings('div').find(`input[name="${attribute}"]`).attr('max')) {
        input.val(value + 1);
        $('.points-left').text(parseInt($('.points-left').text()) - 1);
    }
});

$('.prev').on('click', (element) => {
    let attribute = $(element.target).parent().attr('class').split(' ')[1];
    let input = $(`input[name=${attribute}]`);
    let value = parseInt(input.val());
    if (value > 0) {
        input.val(value - 1);
        $('.points-left').text(parseInt($('.points-left').text()) + 1);
    }
});

$('.icon-button').on('click', () => {
    Swal.fire({
        title: 'Random',
        text: 'Troops randomly configured successfully !',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#4e6450'
    });
});

$('.next-button').on('click', () => {
    window.location.href = './troupesRepartition.html';
});

document.getElementById('force').addEventListener('click', (e) => {
    e.preventDefault();
    Swal.fire({
        title: 'Strength improvement',
        text: 'Each strength point increases a fighter\'s ability to deal 10% damage.',
        icon: 'info',
        confirmButtonText: 'OK',
        confirmButtonColor: '#4e6450',
        cancelButtonColor: '#808080'
    });
});

document.getElementById('dexterite').addEventListener('click', (e) => {
    e.preventDefault();
    Swal.fire({
        title: 'Dexterity improvement',
        text: 'Each point of dexterity increases a fighter\'s ability to dodge and better target his enemy by 3%. It also increases a fighter\'s ability to successfully care for another fighter by 6%.',
        icon: 'info',
        confirmButtonText: 'OK',
        confirmButtonColor: '#4e6450',
        cancelButtonColor: '#808080'
    });
});

document.getElementById('resistance').addEventListener('click', (e) => {
    e.preventDefault();
    Swal.fire({
        title: 'Resistance improvement',
        text: 'Each point of resistance reduces the damage received by the fighter by 5%.',
        icon: 'info',
        confirmButtonText: 'OK',
        confirmButtonColor: '#4e6450',
        cancelButtonColor: '#808080'
    });
});

document.getElementById('constitution').addEventListener('click', (e) => {
    e.preventDefault();
    Swal.fire({
        title: 'Constitution improvement',
        text: 'Chaque point de constitution augmente de 1 point les points de vie d\'un combattant.',
        icon: 'info',
        confirmButtonText: 'OK',
        confirmButtonColor: '#4e6450',
        cancelButtonColor: '#808080'
    });
});

document.getElementById('initiative').addEventListener('click', (e) => {
    e.preventDefault();
    Swal.fire({
        title: 'Initiative improvement',
        text: 'Les points d\'initiative sont comparés entre les combattants à chaque bataille. Lorsque des combattants s\'affrontent, c\'est celui qui a le plus de points d\'initiative qui commence. Celui qui a le moins de points d\'initiative portera le dernier coup (s\'il est encore en vie).',
        icon: 'info',
        confirmButtonText: 'OK',
        confirmButtonColor: '#4e6450',
        cancelButtonColor: '#808080'
    });
});

$('.btn').on('click', function () {
    // Remove background color from all buttons
    $('.btn').removeClass('active');

    // Add background color to the clicked button
    $(this).addClass('active');
});

$(document).on('DOMContentLoaded', () => {
    const showPopup = sessionStorage.getItem('showPopupParametrage') !== 'false';

    if (showPopup) {
        Swal.fire({
            title: 'Setting',
            html: 'Now you need to set your troops! Click on the <b>"?"</b> for information on each improvement. You have 400 points !</b>.',
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
                    sessionStorage.setItem('showPopupParametrage', 'false');
                }
            }
        });
    }
});