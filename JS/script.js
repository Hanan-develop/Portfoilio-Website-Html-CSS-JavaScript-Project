$(document).ready(function () {
    $("#menu").click(function () {
        $(this).toggleClass('fa-times');
        $("header").toggleClass('toggle');
    });

    $(window).on('scroll load', function () {
        $("#menu").removeClass('fa-times');
        $("header").removeClass('toggle');

        if ($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }
    });

    // Smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        let target = $($(this).attr('href')); // Convert string to jQuery object

        if (target.length) { // Ensure target exists
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500, "linear");
        }
    });
});
