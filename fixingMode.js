'use strict';

var elements = document.body.getElementsByTagName("*")

for (var i=0; i < elements.length; i++) {

	let element = elements[i]

    if (!element.style) {
        break
    }

    if (element.tagName == "H1" || 
    	element.tagName == "H2" || 
    	element.tagName == "H3" || 
    	element.tagName == "H4" || 
    	element.tagName == "H5" || 
    	element.tagName == "H6") {
    	if (parseInt(window.getComputedStyle(element, null).getPropertyValue('margin-top'), 10) < 20) {
    		element.style.setProperty("margin-top", "20px")
    	}
    	if (parseInt(window.getComputedStyle(element, null).getPropertyValue('margin-bottom'), 10) < 20) {
    		element.style.setProperty("margin-bottom", "20px")
    	}
    }

    let elementFZ = parseInt(window.getComputedStyle(element, null).getPropertyValue('font-size'), 10)
    let elementLH = parseInt(window.getComputedStyle(element, null).getPropertyValue('line-height'), 10)
    let elementFF = window.getComputedStyle(element, null).getPropertyValue('font-family')

    console.log(elementFF)
    console.log(elementLH)
    console.log(elementFZ)
    console.log(' ')

    // check for default font family
    // indefOF cause its tiny faster
    if (elementFF.indexOf(',') !== -1) {
        // if coma character is in the string, there are minimum 2 different font families, so its probably no needs to change it
    } else {
        element.style.setProperty("font-family", "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,UbuntuCantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif")
    }

    if (isNaN(elementLH)) {
        // default value is 1.2 or inherited - both are bad
        element.style.setProperty("line-height", "1.5")
    }

    if (elementFZ < 16) {
        element.style.setProperty("font-size", "16px", "important")
    }
}