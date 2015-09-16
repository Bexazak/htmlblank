$(document).ready(function() {
	// подключение fancybox
	$('.fancy').fancybox({
		padding: 0
	})

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