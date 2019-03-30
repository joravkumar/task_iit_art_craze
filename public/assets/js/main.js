$(document).ready(function () {
    $('.menu-icon').on('click', function () {
        $('nav ul').toggleClass('showing');
    });

    $('nav ul li').on('click', function () {
        $('nav ul').toggleClass('showing');
    });

    let dots = document.querySelectorAll('.dot-background svg g');

    function randomValues() {
        dots.forEach(dot => {
            anime({
                targets: dot,
                direction: 'alternate',
                duration: 800,
                loop: true,
                translateY: function (el) {
                    return anime.random(0, 30);
                },
                easing: 'easeInOutQuad',
                complete: randomValues
            });
        })
    }
    randomValues();
    // dots.forEach(dot => {
    //     i++;
    //     if (i % 2 == 0) {
    // }
    // })
    // let svgs = document.querySelectorAll('.svg-background svg');
    // svgs.forEach(svg => {
    anime({
        targets: '.circle-pattern',
        translateY: [100, 0],
        direction: 'alternate',
        duration: 3000,
        loop: true,
        easing: 'easeInOutQuad'
    });
    anime({
        targets: '.circle-outline',
        translateY: [100, 0],
        direction: 'alternate',
        duration: 2000,
        loop: true,
        easing: 'easeInOutQuad'
    });
    anime({
        targets: '.circle-filled-pink',
        translateY: [100, 0],
        direction: 'alternate',
        duration: 4000,
        loop: true,
        easing: 'easeInOutQuad'
    });
    anime({
        targets: '.circle-filled-yellow',
        translateY: [-200, 0],
        direction: 'alternate',
        duration: 3000,
        loop: true,
        easing: 'easeInOutQuad'
    });
});