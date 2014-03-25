console.log('in content');
chrome.runtime.onMessage.addListener(
	function (data,sender,sendResponse){
		
		
		if(document.getElementById('username')){
			document.getElementById('username').value = data.name;
		}
		if(document.getElementById('password')){
			document.getElementById('password').value = data.password;
			//console.log(document.getElementById('password').value);
		}
		if(window.localStorage){
			delete data.name;
			delete data.password;
			console.log(data);
			localStorage.setItem('external_data',JSON.stringify(data));
		}
		if(document.getElementById('login-button')){
			document.getElementById('login-button').click.call(document.getElementById('login-button'));
		}

		sendResponse();
});