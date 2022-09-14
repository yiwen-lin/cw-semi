let width = $(window).width();
let height = $(window).height();

$('.navbar .nav-link').click(function () {
  //手機版 nav click 收合
  if($(window).innerWidth() <= 769) {
    $('.navbar-toggler').trigger('click');
  }
});

// header - Smooth scrolling using jQuery easing
$('a.smooth-scroll[href*="#"]:not([href="#"])').click(function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: (target.offset().top)
      }, 1000);
      // return false;
    }
  }
});


$(window).scroll(function () {
    //fix show/hide 
    let scroll = $(this).scrollTop();
});

//fix click none
$(document).ready(function(){
  $("#hide").click(function(){
    $("#fix-right").remove();
  });
});


//faq
$(".accordion__group .accordion__item__header").on("click", function() {
  $(this).parent().siblings().children(".accordion__item__panel").slideUp();
  $(this).parent().siblings().children(".accordion__item__header").removeClass("active");
  $(this).parent().siblings().children(".accordion__item__header").children(".icon-plus").addClass("active");
  $(this).parent().siblings().children(".accordion__item__header").children(".icon-minus").removeClass("active");
  $(this).toggleClass("active");
  $(this).children(".icon-plus").toggleClass("active");
  $(this).children(".icon-minus").toggleClass("active");
  $(this).siblings(".accordion__item__panel").slideToggle();
});

//ga
$(document).click(function() {
  dataLayer.push({
    'eventCategory':'cwdigiteam',  //事件類別
    'eventAction':'2022semiAction',  //動作
    'eventLabel':'',  //活動標籤
    'event':'sendMyEvent' //不可以動
  });
});
