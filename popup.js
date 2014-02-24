window.addEventListener("DOMContentLoaded", function() {
	console.log('dom ready');
	var button = document.getElementById('button');
	button.addEventListener('click',function(){
		//alert('click');
		//console.log('click');
		

		var data = {};
		data.name = document.getElementById('name').value;
		data.password = document.getElementById('password').value;
		
		chrome.tabs.query({
        	active: true,
        	currentWindow: true
		}, function(tabs) {
        	/* ...and send a request for the DOM info... */
        	chrome.tabs.sendMessage(
                tabs[0].id,
                data);
    });



		chrome.tabs.sendMessage(data);
	});
});