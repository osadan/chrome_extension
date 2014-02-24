console.log('in content');
chrome.runtime.onMessage.addListener(
	function (request,sender,sendResponse){
		alert('recived');
		console.log(sender.tab ? "from a content script : " + sender.tab.url : "from the extension");
		console.log(request);
});