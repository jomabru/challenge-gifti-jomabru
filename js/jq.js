/*JQUERY*/

$(function(){

    /*SLIDER*/

	var slidewidth = 1300;
	var slideheight = 402;
	var nbimage= $('.slideshow li').length;
	var tpsdefil=1000;
	var tpsaffich=5000;

	$('#slider img').css({'width':slidewidth,'height':slideheight});
	$('#slider ul').css({'width':nbimage*slidewidth});
	//alert('.slideshow ul');

      setInterval(function(){
         $("#slider ul").animate({marginLeft:'-'+slidewidth+'px'},tpsdefil,function(){
            $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
         })
      }, tpsaffich);


			//BACK TOP


			$('#back-top').hide();
			$(function(){

					$(window).scroll(

							function() {

									if ($(this).scrollTop() > 100) {
									$('#back-top').fadeIn();
							}

							else {
									$('#back-top').fadeOut();
							}
							});

							$('#back-top').click(

									function() {
											$('html, body').animate({scrollTop: 0}, 800);
											return false;
									}
							);
			});
// SCROLL ANCRE

			$('a[href^="#"]').click(function(){
				 var the_id = $(this).attr("href");

					$('html, body').animate({
							scrollTop:$(the_id).offset().top       // Régler problème inscrit dans la console
					}, 1000);
					 return false;
			});
})
