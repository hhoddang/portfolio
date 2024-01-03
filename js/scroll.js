$(document).ready(function () {
    $('#fullpage').fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        lockAnchors: false,
        anchor: ['first', 'second', 'third', 'fourth'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['About', 'Skill', 'Work'],
        sectionsColor: ['lightblue', '#1E1A3B', 'lightyellow'],
        showActiveTolltip: true,
        sectionSelector: '.section',
        slideSelector: '.slide',
        slidesNavigation: false,
        keyboardScrolling: true,
        animateAnchor: true,
        scrollOverflow: false
    });
});

