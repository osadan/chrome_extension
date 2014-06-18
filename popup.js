window.addEventListener("DOMContentLoaded", function() {
	console.log('dom ready');
	var button = document.getElementById('button');
	var name = document.getElementById('name');
	var password = document.getElementById('password');
	var playerDir = document.getElementById('playerDir');
	var playerDir = document.getElementById('mainDir');
	var playerDir = document.getElementById('data');

	if(localStorage['name']){
		name.value = localStorage['name'];
	}

	if(localStorage['password']){
		password.value = localStorage['password'];
	}
	
	if(localStorage['playerDir']){
		playerDir.value = localStorage['playerDir'];
	}

	if(localStorage['mainDir']){
		mainDir.value = localStorage['mainDir'];
	}

	if(localStorage['data']){
		data.value = localStorage['data'];
	}

	button.addEventListener('click',function(){
		//alert('click');
		//console.log('click');

		var data = {};
		data.name = document.getElementById('name').value;
		data.password = document.getElementById('password').value;
		data.playerDir = document.getElementById("playerDir").value;
		data.mainDir = document.getElementById('mainDir').value;
		data.data = document.getElementById('data').value;

		localStorage['name'] = data.name;
		localStorage['password'] = data.password;
		localStorage['playerDir'] = data.playerDir;
		localStorage['mainDir'] = data.mainDir;
		localStorage['data'] = data.data;
		
		chrome.tabs.query({
        	active: true,
        	currentWindow: true
		}, function(tabs) {
        	/* ...and send a request for the DOM info... */
        	chrome.tabs.sendMessage(
                tabs[0].id,
                data,
                function (){
					//alert('callback');
					//console.log('callback');
					window.close();
				});
    	});



		chrome.tabs.sendMessage(data);
	});
});