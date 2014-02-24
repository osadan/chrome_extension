window.addEventListener("DOMContentLoaded", function() {
	console.log('dom ready');
	var button = document.getElementById('button');
	button.addEventListener('click',function(){
		//alert('click');
		//console.log('click');
		var data = {};
		data.name = document.getElementById('name').value;
		data.password = document.getElementById('password').value;
		chrome.runtime.sendMessage(data);
	});
});