'use strict';

// handle install
chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        // setting up modes
		chrome.storage.sync.set({"lightMode1Sites": ['sethrobertson.github.io']})
		chrome.storage.sync.set({"lightMode2Sites": []})
		chrome.storage.sync.set({"darkModeSites": []})
		// fixing mode 
		chrome.storage.sync.set({"fixingMode": []})
		// open site
		chrome.tabs.create({url: "https://romanisthere.github.io/StyLIFy-Website/"})
    } else if(details.reason == "update"){
        
    }
})

// handle tab update
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
	console.log(tabId, tab)
	var url = tab.url
	if (url.includes("chrome://")) {
		chrome.browserAction.disable(tab.id)
	} else {
		chrome.storage.sync.get("lightMode1Sites", function(res) {
		    var newUrl = url.substring(
			    url.lastIndexOf("//") + 2, 
			    url.indexOf("/", 8)
			)

			var arrOfSites = res.lightMode1Sites
			if (arrOfSites.includes(newUrl)) {
				chrome.tabs.executeScript(
		        	tabId,
		          	{file: 'lightMode1.js'}
		        )
				chrome.tabs.insertCSS(
		        	tabId,
		          	{file: 'lightTheme1.css'}
		        )
		    }
		})

		chrome.storage.sync.get("lightMode2Sites", function(res) {
		    var newUrl = url.substring(
			    url.lastIndexOf("//") + 2, 
			    url.indexOf("/", 8)
			)

			var arrOfSites = res.lightMode2Sites
			if (arrOfSites.includes(newUrl)) {
				chrome.tabs.executeScript(
		        	tabId,
		          	{file: 'lightMode2.js'}
		        )
				chrome.tabs.insertCSS(
		        	tabId,
		          	{file: 'lightTheme2.css'}
		        )
		    }
		})

		chrome.storage.sync.get("darkModeSites", function(res) {
		    var newUrl = url.substring(
			    url.lastIndexOf("//") + 2, 
			    url.indexOf("/", 8)
			)

			var arrOfSites = res.darkModeSites
			if (arrOfSites.includes(newUrl)) {
				chrome.tabs.executeScript(
		        	tabId,
		          	{file: 'darkMode.js'}
		        )
		        chrome.tabs.insertCSS(
		        	tabId,
		          	{file: 'darkTheme.css'}
		        )
		    }
		})
	}
})
