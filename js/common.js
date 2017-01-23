$(document).ready(function() {

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$('.my-slider').unslider({
		animation: 'vertical',
		arrows: false,
		dots: true,
		
	});

	$('.first-feature .features-wrapper .feature-header').click(function() {
		$('.first-feature .features-wrapper .feature-content').slideToggle( "slow");
	});

	$('.second-feature .features-wrapper .feature-header').click(function() {
		$('.second-feature .features-wrapper .feature-content').slideToggle( "slow");
	});

	$('.third-feature .features-wrapper .feature-header').click(function() {
		$('.third-feature .features-wrapper .feature-content').slideToggle( "slow");
	});

	$('.owl-carousel').owlCarousel({
		loop:true,
		nav:true,
		items: 1,
		dots: false,
	})

});
