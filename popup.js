'use strict';

// lightmode1 start
let lightMode1 = document.getElementById('lightMode1')

lightMode1.onchange = function(element) {
	showMessage()
	_gaq.push(['_trackEvent', 'lightMode1', 'changed'])
  	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.storage.sync.get("lightMode1Sites", function(res) {
			var url = tabs[0].url
		    var newUrl = url.substring(
			    url.lastIndexOf("//") + 2, 
			    url.indexOf("/", 8)
			)
			var arrOfSites = res.lightMode1Sites

			if (element.target.checked) {
				chrome.tabs.executeScript(
			      	null,
			      	{file: 'lightMode1.js'}
			  	)
				arrOfSites.push(newUrl)
				chrome.storage.sync.set({"lightMode1Sites": arrOfSites})
				document.getElementById('lightMode1Text').textContent="off"
			} else {			    	
				arrOfSites = arrOfSites.filter(e => e !== newUrl)
				chrome.storage.sync.set({"lightMode1Sites": arrOfSites})
				document.getElementById('lightMode1Text').textContent="on"
			}

			if (lightMode2.checked) {
				document.getElementById("lightMode2").checked = false
				document.getElementById('lightMode2Text').textContent="on"
				chrome.storage.sync.get("lightMode2Sites", function(res) {
					let arrayForSync = res.lightMode2Sites
					arrayForSync = arrayForSync.filter(e => e !== newUrl)
					chrome.storage.sync.set({"lightMode2Sites": arrayForSync})
				})
			}

			if (darkMode.checked) {
				document.getElementById("darkMode").checked = false
				document.getElementById('darkModeText').textContent="on"
				chrome.storage.sync.get("darkModeSites", function(res) {
					let arrayForSync = res.darkModeSites
					arrayForSync = arrayForSync.filter(e => e !== newUrl)
					chrome.storage.sync.set({"darkModeSites": arrayForSync})
				})
			}
		})			
    })
}
// lightmode1 finish

// lightmode2 start
let lightMode2 = document.getElementById('lightMode2')

lightMode2.onchange = function(element) {
	showMessage()
	_gaq.push(['_trackEvent', 'lightMode2', 'changed'])
  	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.storage.sync.get("lightMode2Sites", function(res) {
			var url = tabs[0].url
		    var newUrl = url.substring(
			    url.lastIndexOf("//") + 2, 
			    url.indexOf("/", 8)
			)
			var arrOfSites = res.lightMode2Sites

			if (element.target.checked) {
				chrome.tabs.executeScript(
			      	null,
			      	{file: 'lightMode2.js'}
			  	)
				arrOfSites.push(newUrl)
				chrome.storage.sync.set({"lightMode2Sites": arrOfSites})
				document.getElementById('lightMode2Text').textContent="off"
			} else {			    	
				arrOfSites = arrOfSites.filter(e => e !== newUrl)
				chrome.storage.sync.set({"lightMode2Sites": arrOfSites})
				document.getElementById('lightMode2Text').textContent="on"
			}

			if (lightMode1.checked) {
				document.getElementById("lightMode1").checked = false
				document.getElementById('lightMode1Text').textContent="on"
				chrome.storage.sync.get("lightMode1Sites", function(res) {
					let arrayForSync = res.lightMode1Sites
					arrayForSync = arrayForSync.filter(e => e !== newUrl)
					chrome.storage.sync.set({"lightMode1Sites": arrayForSync})
				})
			}

			if (darkMode.checked) {
				document.getElementById("darkMode").checked = false
				document.getElementById('darkModeText').textContent="on"
				chrome.storage.sync.get("darkModeSites", function(res) {
					let arrayForSync = res.darkModeSites
					arrayForSync = arrayForSync.filter(e => e !== newUrl)
					chrome.storage.sync.set({"darkModeSites": arrayForSync})
				})
			}
		})			
    })
}
// lightmode2 finish

// darkmode1 start
let darkMode = document.getElementById('darkMode')

darkMode.onchange = function(element) {
	showMessage()
	_gaq.push(['_trackEvent', 'darkMode', 'changed'])
  	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.storage.sync.get("darkModeSites", function(res) {
			var url = tabs[0].url
		    var newUrl = url.substring(
			    url.lastIndexOf("//") + 2, 
			    url.indexOf("/", 8)
			)
			var arrOfSites = res.darkModeSites

			if (element.target.checked) {
				chrome.tabs.executeScript(
			      	null,
			      	{file: 'darkMode.js'}
			  	)
				arrOfSites.push(newUrl)
				chrome.storage.sync.set({"darkModeSites": arrOfSites})
				document.getElementById('darkModeText').textContent="off"
			} else {			    	
				arrOfSites = arrOfSites.filter(e => e !== newUrl)
				chrome.storage.sync.set({"darkModeSites": arrOfSites})
				document.getElementById('darkModeText').textContent="on"
			}

			if (lightMode1.checked) {
				document.getElementById("lightMode1").checked = false
				document.getElementById('lightMode1Text').textContent="on"
				chrome.storage.sync.get("lightMode1Sites", function(res) {
					let arrayForSync = res.lightMode1Sites
					arrayForSync = arrayForSync.filter(e => e !== newUrl)
					chrome.storage.sync.set({"lightMode1Sites": arrayForSync})
				})
			}

			if (lightMode2.checked) {
				document.getElementById("lightMode2").checked = false
				document.getElementById('lightMode2Text').textContent="on"
				chrome.storage.sync.get("lightMode2Sites", function(res) {
					let arrayForSync = res.lightMode2Sites
					arrayForSync = arrayForSync.filter(e => e !== newUrl)
					chrome.storage.sync.set({"lightMode2Sites": arrayForSync})
				})
			}
		})			
    })
}
// darkmode1 finish



// inits visual of popup on opening
function initState() {
	// lightmode1
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.storage.sync.get("lightMode1Sites", function(res) {
			var url = tabs[0].url
		    var newUrl = url.substring(
			    url.lastIndexOf("//") + 2, 
			    url.indexOf("/", 8)
			)
			var arrOfSites = res.lightMode1Sites

			if (arrOfSites.includes(newUrl)) {
				document.getElementById("lightMode1").checked = true
				document.getElementById('lightMode1Text').textContent="off"
			} 
		})			
    })

	// lightmode2
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.storage.sync.get("lightMode2Sites", function(res) {
			var url = tabs[0].url
		    var newUrl = url.substring(
			    url.lastIndexOf("//") + 2, 
			    url.indexOf("/", 8)
			)
			var arrOfSites = res.lightMode2Sites

			if (arrOfSites.includes(newUrl)) {
				document.getElementById("lightMode2").checked = true
				document.getElementById('lightMode2Text').textContent="off"
			} 
		})			
    })

    // darmode1
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.storage.sync.get("darkModeSites", function(res) {
			var url = tabs[0].url
		    var newUrl = url.substring(
			    url.lastIndexOf("//") + 2, 
			    url.indexOf("/", 8)
			)
			var arrOfSites = res.darkModeSites

			if (arrOfSites.includes(newUrl)) {
				document.getElementById("darkMode").checked = true
				document.getElementById('darkModeText').textContent="off"
			} 
		})			
    })
}

initState()

// message with reload
function showMessage() {
	document.querySelector('.message').classList.add('message-visible')
	document.querySelector('.message__link').onclick = function() {
	    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	        chrome.tabs.update(tabs[0].id, {url: tabs[0].url})
	        document.querySelector('.message').classList.remove('message-visible')
	    })
	}
}

// ga
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-138501898-3']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script');
  ga.type = 'text/javascript';
  ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(ga, s);
})();

document.getElementsByClassName('insturctions')[0].addEventListener('click', function(){
	_gaq.push(['_trackEvent', 'instructions', 'clicked'])
})
