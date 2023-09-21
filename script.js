//your JS code here. If required.
function loader(){
	let b=document.createTextNode('DOM load success');
	
	
	document.body.appendChild(b)
}
document.addEventListener('DOMContentLoaded',loader)