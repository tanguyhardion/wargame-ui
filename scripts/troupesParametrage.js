for (var i = 0; i < 15; i++) {
    $('.soldats-container').append('<img src="./res/images/soldats/casque_soldat.png" alt="helmet_logo">');
}

for (var i = 0; i < 4; i++) {
    $('.soldats-container').append('<img src="./res/images/soldats/casque_elite.png" alt="helmet_logo">');
}

$('.soldats-container').append('<img src="./res/images/soldats/casque_general.png" alt="helmet_logo">');

$('.soldats-container img')[0].classList.add('selected');

$('.soldats-container img').on('click', (element) => {
    $(element.target).toggleClass('selected');
    $(element.target).siblings().removeClass('selected');
});

$('.arrow-container').on('click', (element) => {
    let side = $(element.target).attr('class').split(' ')[1];
    let image = $('.soldat img');
    const sign = side === 'left' ? '-' : '';
    const inverseSign = side === 'left' ? '' : '-';
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
    if (value < 10) {
        input.val(value + 1);
    }
});

$('.prev').on('click', (element) => {
    let attribute = $(element.target).parent().attr('class').split(' ')[1];
    let input = $(`input[name=${attribute}]`);
    let value = parseInt(input.val());
    if (value > 0) {
        input.val(value - 1);
    }
});

