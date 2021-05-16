
// Scroll reveal

ScrollReveal().reveal('.title-box');
ScrollReveal().reveal('.about-main-info');
ScrollReveal().reveal('.presentation');
ScrollReveal().reveal('.objectifs-formation');
ScrollReveal().reveal('.objectifs-pedagogiques');


/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    //heigh 400 lap top//
    if (height > 4400) { 
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});

 /*Scroll to top when arrow up clicked END*/