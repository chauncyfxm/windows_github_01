// // 根据类获取对象列表
// function getElementByClassName(classname){
//     var tags=document.getElementsByTagName("*");
//     var list=[];
//     for(var i in tags){
//         var tag=tags[i];
//         if(tag.className==classname){list.push(tag);}
//     }
//     return list;
// }

// // *************************



// function my_display(oDisplay,effect){
// 	var oToDisplay = document.getElementById(effect);
// 		oToDisplay.style.display = "block";

// 	oDisplay.onmouseout = function(){
// 		oToDisplay.style.display = "none";
// 	}
// }

function my_display_01(class_01,class_02){
	var list_01 = document.getElementsByClassName(class_01);
	var list_02 = document.getElementsByClassName(class_02);
	for (var i = list_01.length - 1; i >= 0; i--) {
		list_01[i].style.background = "#fff";
		list_01[i].style.color = "#000";
		}

	for (var i = list_02.length - 1; i >= 0; i--) {
		list_02[i].style.display = "block";
		}


}

function my_display_02(class_01,class_02){
	var list_01 = document.getElementsByClassName(class_01);
	var list_02 = document.getElementsByClassName(class_02);
	for (var i = list_01.length - 1; i >= 0; i--) {
		list_01[i].style.background = "#000";
		list_01[i].style.color = "#fff";
	}

	for (var i = list_02.length - 1; i >= 0; i--) {
		list_02[i].style.display = "none";
	}

}





// window.onload = function(){

// 	var x = document.getElementsByClassName("clearfix");

// 	console.log(x);
// // function getElementByClassName(classname){
// //     var tags=document.getElementsByTagName("*");
// //     var list=[];
// //     for(var i in tags){
// //     	console.log("我是全部类:" + tags[i].className);
// //         var tag=tags[i];
// //         var string = tag.className + "1";
// //         console.log("我是string:"+string);
// //         if(string.indexOf(classname)!=(-1)){list.push(tag);}
// //     }
// //     for(var i=0; i<list.length; i++){
// //     	console.log(i);
// //     	console.log("我是列表：" + list[i].className);
// //     }
// //     return list;

// // }
// // getElementByClassName("clearfix");

// }



// document.getElementsByClassName=function(className){  
//     var children = document.getElementsByTagName('*') || document.all;
//     var elements=new Array();
//     for(var i=0;i<children.length;i++)  
//     {  
//         var child=children[i];  
//         var classNames=child.className.split(' ');  
//         for(var j=0;j<classNames.length;j++)  
//         {  
//             if(className==classNames[j])  
//             {  
//                 elements.push(child);  
//                 break;  
//             }  
//         }  
//     }  
//     return elements;  
// }