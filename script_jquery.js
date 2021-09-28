$(function(){
	$("#promo").click(function(){
		$("h1").css("color", "#ffa600");
		$("#produtopromo").css("display", "block");
		$("#produtomeninos").css("display", "none");
		$("#produtomeninas").css("display", "none");
		$("#produtopromo").css("background-color", "#ffd280");
	});
	$("#menino").click(function(){
		$("h1").css("color", "#00e6b8");
		$("#produtopromo").css("display", "none");
		$("#produtomeninos").css("display", "block");
		$("#produtomeninas").css("display", "none");
		$("#produtomeninos").css("background-color", "#99ffeb");
		
	});
	$("#menina").click(function(){
		$("h1").css("color", "#ff0066");
		$("#produtopromo").css("display", "none");
		$("#produtomeninos").css("display", "none");
		$("#produtomeninas").css("display", "block");
		$("#produtomeninas ").css("background-color", "#ffccff");
	});
	
	



	
});