$(function () {
			var $preloader = $('#page-preloader'),
       $spinner   = $preloader.find('.spinner');
   $spinner.fadeOut();
   $preloader.delay(350).fadeOut('slow');
   if($("#map").length) {
			ymaps.ready(init); 
   var myMap, 
       myPlacemark;
   function init(){ 
       myMap = new ymaps.Map("map", {
           center: [46.47412857, 30.74600850],
           zoom: 17
       }); 
       
       myPlacemark = new ymaps.Placemark([46.47412857, 30.74600850], {
           hintContent: 'Москва!',
           balloonContent: 'Столица России'
       });
       
       myMap.geoObjects.add(myPlacemark);
   }
  }
  	$('.menu-open').click(function () {
        $('.menu-collapse').toggleClass('d-none').toggleClass('order-1');
        $('.menu').toggleClass('menu-opened');
    });
  	$('.main-slider').slick({
    dots:true,
    infinite: true,
    autoplay: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
  	});

  	$("a.go").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });
  	$('.call').click(function (e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal();
    });


	});