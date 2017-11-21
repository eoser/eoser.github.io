function actionChange(who){
	var index = who.selectedIndex;
	document.getElementById("searchs").action=who.options[index].value;
	document.getElementById("goInput").name=who.options[index].getAttribute("setName");
}
