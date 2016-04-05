$(document).ready(function() {

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});
	//Скролл до id, указанного в hash URL
	var elem = window.location.hash;
	if(elem) {
		$.scrollTo(elem, 800, {
			offset: -90
		});
	};

	//Каруселька
	//Документация: http://www.owlcarousel.owlgraphic.com/docs/
	$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
//    margin:0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false
        }
    }
});
   
    // Слик карусель с autoplay
    // Документация http://kenwheeler.github.io/slick/
    $('.slider').slick({
      arrows: true,
      autoplay: true,
      autoplaySpeed: 6000,
      infinite: true,
      speed: 200,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1067,
          settings: {
            slidesToShow:4,
            slidesToScroll:1,
            infinite:true
           
          }
        },
          {
          breakpoint: 850,
          settings: {
            slidesToShow:3,
            slidesToScroll:1,
            infinite:true
            
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
             arrows: false,
              infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
              arrows: false,
              infinite: true
          }
        }
         //You can unslick at a given breakpoint now by adding:
         //settings: "unslick"
        // instead of a settings object
      ]
});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
//	$("form").submit(function() {
//		$.ajax({
//			type: "GET",
//			url: "mail.php",
//			data: $("form").serialize()
//		}).done(function() {
//			alert("Спасибо за заявку!");
//			setTimeout(function() {
//				$.fancybox.close();
//			}, 1000);
//		});
//		return false;
//	});
//	
    // Добавление клиентов custom script сорри ( шо мог, написал)))
    $(".clients").click(function(e, app){
        app = $("#seven").find(".container").find(".row:eq(2)").clone();
        app.addClass("cloned").insertAfter($(this).closest(".row").prev()).slideDown("slow");
       
        
        e.preventDefault();
    })

// Mob menu custom script (sorry for my skills, it's realy shame on me))))
    $(".mob-nav").find(".mobile").each(function(){
        $(this).click(function(){
            var indexElem = ($(".mobile").index(this));
            var menuElem = $(".js").eq(indexElem);
           if ($(this).hasClass("active")){
               $(this).removeClass("active");
               menuElem.slideUp("slow");
           } else {
               $(this).addClass("active").siblings().removeClass("active");
               menuElem.addClass("active").slideDown("slow");
           }
        })
    })
    
});
// Адаптивные скрипты, которые срабатывают только при определенном разрешении экрана
// Документация: https://github.com/maciej-gurban/responsive-bootstrap-toolkit
(function($, document, window, viewport) {
	function resizeWindow() {
		// $("a").click(function() {
		// 	if (viewport.is("lg")) {
		// 		return false;
		// 	};
		// });
};
$(document).ready(function() {
	resizeWindow();
});
$(window).bind("resize", function() {
	viewport.changed(function(){
		resizeWindow();
	});
});
})(jQuery, document, window, ResponsiveBootstrapToolkit);