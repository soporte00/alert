function mssg(message,type=null){
	const alertBox = document.getElementById('alertBox');
	
	const createAlert = document.createElement("DIV");
	
	createAlert.setAttribute("class", 
		(type === 'e' || type === 'error')
		? 'alertbox__mssg alertbox__mssg--error' 
		: 'alertbox__mssg alertbox__mssg--ok' 
	);
		
	createAlert.innerHTML = `<button class='alertbox__close' onclick="this.parentNode.remove()">x</button> ${message}`;	

	alertBox.appendChild(createAlert);

	setTimeout(function(){ 	
		alertBox.contains(createAlert) && createAlert.classList.add('alertHidden')
	}, 5300);

	setTimeout(function(){ 	
		alertBox.contains(createAlert) && alertBox.removeChild(createAlert)
	}, 6000);
}
