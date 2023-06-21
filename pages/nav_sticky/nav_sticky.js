


// $(window).scroll(function () {
//     if ($(this).scrollTop() > 100) {
//         $('.nav').addClass('sticky')
//     } else {
//         $('.nav').removeClass('sticky')
//     }
// });


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementsByClassName("nav")[0].classList.add('sticky');


    } else {


        document.getElementsByClassName("nav")[0].classList.remove('sticky');

    }
}