//script for dropdow menu
function myFunction(){
	document.getElementById("menuDeroulent").classList.toggle("show");
}

window.onclick = function(event) {
if(!event.target.matches(".dropLine")){
	var dropdowns = document.getElementsByClassName("sousMenuContenu");
	var i;
	for (i=0;i<dropdowns.length;i++){
		var openDropDown = dropdowns[i];
		if(openDropDown.classList.contains("show")){
			openDropDown.classList.remove("show");
		}
	}
}}
