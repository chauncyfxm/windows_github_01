// alert("我是外部的你好");
window.onload = function(){
	function my_display(trigger,effect){
	var oDisplay = document.getElementById(trigger);
	var oToDisplay = document.getElementById(effect);
	// alert("你好啊！");
	// alert(oToDisplay.innerHTML);

	oDisplay.onmouseover = function(){
	// alert("你好啊_02！");
		oToDisplay.style.display = "block";

		// if(oToDisplay.style.display == "none"){
		// 	oToDisplay.style.display = "block";
		// }else{
		// 	oToDisplay.style.display = "none";
		// }
	}

	oDisplay.onmouseout = function(){
		oToDisplay.style.display = "none";
	}
	}
}