
// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
  // If the letter 'g' is found in the tab's URL...
  chrome.tabs.query({
	'active' : true,
	/*'windowId' : chrome.windows.WINDOW_ID_CURRENT*/
	currentWindow:true
  },function (tabs){
  		if (tabs[0].url.indexOf('timetoknow') > -1) {
		    // ... show the page action.
		    chrome.pageAction.show(tabId);
  		}
  });
  
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);
//chrome.browserAction.onClicked.addListener(getBgColors);
