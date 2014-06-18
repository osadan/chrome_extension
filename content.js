chrome.runtime.onMessage.addListener(
	function (data,sender,sendResponse){
		
		
		if(document.getElementById('username')){
			document.getElementById('username').value = data.name;
		}
		
		if(document.getElementById('password')){
			document.getElementById('password').value = data.password;
		}
		
		if(window.localStorage){
			delete data.name;
			delete data.password;
			if(data.data){
				localStorage.setItem('external_data_data',data.data);
				delete data.data;
			}

			localStorage.setItem('external_data',JSON.stringify(data));
		}
		
		if(document.getElementById('login-button')){
			document.getElementById('login-button').click.call(document.getElementById('login-button'));
		}

		sendResponse();
});