window.addEventListener("DOMContentLoaded", function() {
	console.log('dom ready');
	var button = document.getElementById('button');
	button.addEventListener('click',function(){
		alert('click');
		console.log('click');
	});
});