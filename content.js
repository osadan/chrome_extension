console.log('in content');
chrome.runtime.onMessage.addListener(
	function (data,sender,sendResponse){
		
		//console.log(sender.tab ? "from a content script : " + sender.tab.url : "from the extension");
		//console.log(data);
		if(document.getElementById('username')){
			document.getElementById('username').value = data.name;
		}
		if(document.getElementById('password')){
			document.getElementById('password').value = data.password;
			//console.log(document.getElementById('password').value);
		}
		if(document.getElementById('login-button')){
			document.getElementById('login-button').click.call(document.getElementById('login-button'));
		}
		sendResponse();
});