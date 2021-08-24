$(function() {
    $('[data-scrollto]').on('click', function(event) {
        event.preventDefault();

        const blockId = $(this).data('scrollto');
        const blockOffset = $(blockId).offset().top;

        $('html, body').animate({
            scrollTop: blockOffset - 50
        }, 700);
    });

    $('[data-showmodal]').on('click', function(event) {
        event.preventDefault();

        const modalId = $(this).data('showmodal');

        $(modalId).show();
    });

    $('.modal').on('click', function() {
        $(this).hide();
    });
});