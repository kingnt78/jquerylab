$(document).ready(function(){
//    $("li").on("click", function()
//         ("second-page").show());
// });
$("li").click(function(){
	$("#second-page").show().slideDown();
	});


}
const available="allowed(this)"
const reserved="reserved(this)"
function allowed(obj){
		obj.innerHTML= "available"
}

function reserved(obj){
	obj.innerHTML = "reserved"
}








});
 
