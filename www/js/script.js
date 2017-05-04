

function resize() {
	w_w = $(window).width();
	w_h = $(window).height();
	if( w_w > 768){ //десктоп
		
	}else{//мобильник
		
	}
}

function initsite() {
	$(".portfolio-about").removeClass("portfolio-about_active");
	$(".portfolio-item").addClass("portfolio-item_active");
	var countdesign = $(".portfolio-item .portfolio-item__design").length;
	var countfrontend = $(".portfolio-item .portfolio-item__frontend").length;
	var countsupport = $(".portfolio-item .portfolio-item__support").length;
	$(".portfolio-filter__item_design span").text(countdesign);
	$(".portfolio-filter__item_frontend span").html(countfrontend);
	$(".portfolio-filter__item_support span").html(countsupport);
}

function enableBtn(){
	document.getElementById("sendmsg").disabled = false;
}

$(window).on("resize",function(){
    resize();
});

$(document).ready(function() {

	document.getElementById("sendmsg").disabled = true;

	resize();

	initsite();

	$(".portfolio-about").removeClass("portfolio-about_active");

	$(".portfolio-nav__item").click(function() {
		var company = $(this).attr("data-company");
		$(".portfolio-nav__item").removeClass("portfolio-nav__item_active");
		$(this).addClass("portfolio-nav__item_active");
		if( company != "all" ){
			$(".portfolio-about").removeClass("portfolio-about_active");
			$(".portfolio-about[data-company='"+ company +"']").addClass("portfolio-about_active");
			$(".portfolio-item").removeClass("portfolio-item_active");
			$(".portfolio-item[data-company='"+ company +"']").addClass("portfolio-item_active");
			var countdesign = $(".portfolio-item[data-company='"+ company +"'] .portfolio-item__design").length;
			var countfrontend = $(".portfolio-item[data-company='"+ company +"'] .portfolio-item__frontend").length;
			var countsupport = $(".portfolio-item[data-company='"+ company +"'] .portfolio-item__support").length;
			if( countdesign == 0){
				$(".portfolio-filter__item_design").addClass("portfolio-filter__item_disable");
			}else{
				$(".portfolio-filter__item_design").removeClass("portfolio-filter__item_disable");
			}
			$(".portfolio-filter__item_design span").text(countdesign);

			if( countfrontend == 0){
				$(".portfolio-filter__item_frontend").addClass("portfolio-filter__item_disable");
			}else{
				$(".portfolio-filter__item_frontend").removeClass("portfolio-filter__item_disable");
			}
			$(".portfolio-filter__item_frontend span").text(countfrontend);

			if( countsupport == 0){
				$(".portfolio-filter__item_support").addClass("portfolio-filter__item_disable");
			}else{
				$(".portfolio-filter__item_support").removeClass("portfolio-filter__item_disable");
			}
			$(".portfolio-filter__item_support span").text(countsupport);
		}else{
			$(".portfolio-about").removeClass("portfolio-about_active");
			$(".portfolio-item").addClass("portfolio-item_active");
			var countdesign = $(".portfolio-item .portfolio-item__design").length;
			var countfrontend = $(".portfolio-item .portfolio-item__frontend").length;
			var countsupport = $(".portfolio-item .portfolio-item__support").length;
			$(".portfolio-filter__item_design").removeClass("portfolio-filter__item_disable");
			$(".portfolio-filter__item_frontend").removeClass("portfolio-filter__item_disable");
			$(".portfolio-filter__item_support").removeClass("portfolio-filter__item_disable");
			$(".portfolio-filter__item_design span").text(countdesign);
			$(".portfolio-filter__item_frontend span").text(countfrontend);
			$(".portfolio-filter__item_support span").text(countsupport);
		}
		
	});

	$(".popup-open").click(function() {
		$(".popup").addClass("popup_active");
	});
	$(".popup-close").click(function() {
		$(".popup").removeClass("popup_active");
	});

	$(".form-ok__close").click(function() {
		$("#form").show();
        $("#form-ok").hide();
	});

	$("#form").submit(function() { //устанавливаем событие отправки для формы с id=form
        var form_data = $(this).serialize(); //собераем все данные из формы
        form_data['g-recaptcha-response'] = grecaptcha.getResponse();
        $.ajax({
        type: "POST", //Метод отправки
        url: "send.php", //путь до php фаила отправителя
        data: form_data,
        success: function() {
               $("#form").hide();
               $("#form-ok").show();
            }
        });
        return false;
    });

});

