$(document).ready(function () {

    //owl code
    $('.owl-carousel').owlCarousel({
        loop: true,
        dots: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    })

    //sideBar
    $(".menu").click(function () {
        $(".sideBar").addClass("show");
    });
    $(".close").click(function () {
        $(".sideBar").removeClass("show");
    });


    //dropdown
    $("ul.dropdown li").hover(function () {
        $(this).find(".subList").slideDown(300);
    }, function () {
        $(this).find(".subList").slideUp(300);
    });

    /*
    $(".hasSibling").hover(function(){
        $(".subList").slideDown(300);
    },function(){
        $(".subList").slideUp(300);
    });*/




    //PopUp
    $(".click").click(function () {
        $("#shadow").fadeIn(500);
        $(".popUp").fadeIn(500);
    });
    $(".close , #shadow").click(function () {
        $("#shadow").fadeOut(500);
        $(".popUp").fadeOut(500);
    });
});




