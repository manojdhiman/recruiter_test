$(document).ready(function(){

			$(".img").click(function(){
			    var photoSrc = $(this).find("img").attr("src");
			    $(this).append("<div class='big-img-cont'><img src='"+photoSrc+"' /><span class='close'></span></div>");
			    $('.overlay').fadeIn();
			});
			$(document).mouseup(function (e)
		{
		    var container = $(".big-img-cont");

		    if (!container.is(e.target) // if the target of the click isn't the container...
			   && container.has(e.target).length === 0) // ... nor a descendant of the container
		    {
			   //container.hide();
			   container.remove();
			   $('.overlay').fadeOut();
		    }
		});
										
});
