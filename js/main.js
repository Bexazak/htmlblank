$(document).ready(function() {
	// подключение слайдеров
	$('.slider').flexslider({
		animation: 'slide',
		directionNav: false,
    slideshow: false
	});

	// подключение fancybox
	$('.fancy').fancybox({
		padding: 0
	})

	// маска ввода для телефона
	$('.phone').mask("+7 (999) 999-99-99", {placeholder:"_"});

	// Валидация формы
  	$('.allform').each(function(){
    	$(this).unbind('submit').on('submit', function(e){
    		var emailPattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    	    var isValid = true;
        	$(this).find('.req').each(function() {
      			if ($(this).attr('name') == 'email') {
      				if (!emailPattern.test($(this).val())) {
            			$(this).addClass('error');
	           			isValid = false;	
     				} else {
     					$(this).removeClass('error');
     				}
      			} else {
          			if ($(this).val() == '') {
            			$(this).addClass('error');
            			isValid = false;	
            		} else {
            			$(this).removeClass('error');
            		}
      			}
       		});
       		return isValid;	
        });
    });
});