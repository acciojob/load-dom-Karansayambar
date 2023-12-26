//your JS code here. If required.
function onDOMLoad() {
	const para = document.createElement("p");
	para.innerText = "DOM load success";
	document.body.appendChild(para);
}
onDOMLoad();