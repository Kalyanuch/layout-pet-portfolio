$(function() {
    //console.log('Wow, it works!!');
    $('[data-scrollto]').on('click', function(event) {
        //e.stopPropagation();
        event.preventDefault();

        const blockId = $(this).data('scrollto');
        const blockOffset = $(blockId).offset().top;

        $('html, body').animate({
            scrollTop: blockOffset - 50
        }, 700);
    });
});