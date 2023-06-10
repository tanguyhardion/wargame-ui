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
    if (!target.hasClass('selected')) {
        target.toggleClass('selected');
        target.siblings().removeClass('selected');
    }
    const src = target.attr('src');
    if (src.includes('casque_soldat')) {
        $('.soldat img').attr('src', './res/images/soldats/soldat.png');
        $('.soldat .name').text('Soldat');
        $('.health-bar span').text('30 PV');
        const attributes = $('.attributes input');
        attributes.each((index, element) => {
            $(element).val(0);
        });
    } else if (src.includes('casque_elite')) {
        $('.soldat img').attr('src', './res/images/soldats/soldat_elite.png');
        $('.soldat .name').text('Soldat d\'élite');
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
        $('.soldat .name').text('Maître de guerre');
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

var current = 0;

$('.arrow-container').on('click', (element) => {
    let side = $(element.target).attr('class').split(' ')[1];
    let image = $('.soldat img');
    const sign = side === 'left' ? '-' : '';
    const inverseSign = side === 'left' ? '' : '-';
    current = side === 'left' ? current - 1 : current + 1;
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
});

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

$('.icon-button').click(() => {
    Swal.fire({
        title: 'Aléatoire',
        text: 'Troupes paramétrées aléatoirement avec succès !',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#4e6450'
    });
});