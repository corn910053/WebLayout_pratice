$(function(){

	//Do image cycleplay use
	var n = 1;
	clock = setInterval(auto, 4000);

	function change(){
		$(".banner2").css("background-image", "./image/title/t"+ n + ".jpg");
		$(".banner2 img").fadeOut(900, function(){
			$(".banner2 img").attr("src", "./image/title/t"+ n + ".jpg");
			$(".banner2 img").fadeIn();
		})
	}

	function auto(){
		n++;
		if(n > (7 - 1) ){
			n = 1;
		}
		change();
	}
});