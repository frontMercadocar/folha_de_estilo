$(function() {
	if (window.PIE) { $('*').each(function() { PIE.attach(this); }); }
	$('.scroll').enscroll();

	$('#myModal').modal('toggle');
	$('[data-toggle="tooltip"]').tooltip();
})

function click_aside(val){

	var section = $('#col_'+val);
	var aside = $('.row-aside-'+val);
	
	if(section.attr('class') == 'aside-closed' || section.attr('class') == 'section-1 aside-closed'){
		
			if(val == 2){
				$('.section-1').removeClass('aside-closed');
				$('.section-2').attr('style','width: calc(100% - 210px)');
			}else{
				section.removeClass('aside-closed');
				aside.removeClass('aside-closed');
			}
		
	}else{
			if(val == 2){
				$('.section-1').addClass('aside-closed');
				$('.section-2').attr('style','width: calc(100% - 30px)');
			}else{
				section.addClass('aside-closed');
				aside.addClass('aside-closed');	
			}	
		
	}
}

