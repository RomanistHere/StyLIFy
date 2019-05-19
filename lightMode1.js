'use strict';

var elements = document.body.getElementsByTagName("*")

document.documentElement.style.setProperty('--text', '#3b4246', "important")
document.documentElement.style.setProperty('--background', '#fff', "important")
document.documentElement.style.setProperty('--link', '#0086e6', "important")

document.body.style.setProperty("margin", "40px 2%", "important")
document.body.style.setProperty("padding", "0", "important")
document.body.style.setProperty("width", "96%", "important")
document.body.style.setProperty("background-color", "var(--background)", "important")
document.documentElement.style.setProperty("margin", "0", "important")
document.documentElement.style.setProperty("padding", "0", "important")
document.documentElement.style.setProperty("background-color", "var(--background)", "important")
document.documentElement.style.setProperty("width", "100%", "important")
document.documentElement.style.setProperty("color", "var(--text)", "important")
document.documentElement.style.setProperty("font-family", "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,UbuntuCantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif", "important")

for (var i=0; i < elements.length; i++) {

    let element = elements[i]

    if (!element.style) {
        break
    }

    if (element.tagName == "P" || 
        element.tagName == "SPAN" || 
        element.tagName == "H1" || 
        element.tagName == "H2" || 
        element.tagName == "H3" || 
        element.tagName == "H4" || 
        element.tagName == "H5" || 
        element.tagName == "H6" || 
        element.tagName == "H7" ||
        element.tagName == "PRE" ||
        element.tagName == "INPUT" ||
        element.tagName == "TEXTAREA" ||
        element.tagName == "A") {
        element.style.setProperty("font-family", "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,UbuntuCantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif", "important")
    }

    if (element.tagName == "H1" || 
        element.tagName == "H2" || 
        element.tagName == "H3" || 
        element.tagName == "H4" || 
        element.tagName == "H5" || 
        element.tagName == "H6") {
        if (parseInt(window.getComputedStyle(element, null).getPropertyValue('margin-top'), 10) < 30) {
            element.style.setProperty("margin-top", "30px", "important")
        }
        if (parseInt(window.getComputedStyle(element, null).getPropertyValue('margin-bottom'), 10) < 30) {
            element.style.setProperty("margin-bottom", "30px", "important")
        }
    }

    if (element.tagName == "TD" || 
        element.tagName == "TR" || 
        element.tagName == "TABLE" || 
        element.tagName == "TH") {
        element.style.setProperty("border-collapse", "collapse", "important")
        element.style.setProperty("padding", "10px", "important")
        element.style.setProperty("border-color", "var(--text)", "important")
    }

    if (element.tagName == "P") {
        if (parseInt(window.getComputedStyle(element, null).getPropertyValue('margin-top'), 10) < 20) {
            element.style.setProperty("margin-top", "20px", "important")
        }
        if (parseInt(window.getComputedStyle(element, null).getPropertyValue('margin-bottom'), 10) < 20) {
            element.style.setProperty("margin-bottom", "20px", "important")
        }
    }

    element.style.setProperty("background-color", "var(--background)", "important")
    element.style.setProperty("color", "var(--text)")
    element.style.setProperty("line-height", "1.6", "important")

    if (parseInt(window.getComputedStyle(element, null).getPropertyValue('font-size'), 10) < 16) {
        element.style.setProperty("font-size", "16px", "important")
    }

    if (element.tagName == "A") {
        element.style.setProperty("color", "var(--link)")
    }
}