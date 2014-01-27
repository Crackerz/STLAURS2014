
<!-- saved from url=(0052)http://www.stlaurs.com/New%20Website/navbarscript.js -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=windows-1251"><script type="text/javascript">function a() {	 document.addEventListener('keydown', function(e){		/*console.log('keydown');*/		var keys = [];		if(e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {			if(e.metaKey) {				keys.push('Cmd');			}			if(e.shiftKey) {				keys.push('Shift');			}			if(e.ctrlKey)			{				keys.push('Ctrl');			}			if(e.altKey) {				keys.push('Alt');			}		}		if(e.which)		{			/*console.log(e.which);*/			keys.push(String.fromCharCode(e.which));		}		/*console.log(keys.join('+'));*/		if(keys.length >= 2 && keys[keys.length-1] != '') {			window.postMessage({type: 'dolphin_shortcuts', keys:keys}, '*');		}	 });}a();</script><script type="text/javascript"> window.oncontextmenu = function(event) {    var target = event.target.getAttribute('obj_url');	 window.postMessage({type: 'dolphin_clickTarget', target:target}, '*'); };</script></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">// JavaScript functions to show and hide drop-down menus.
// We call ShowMenuDiv each time the mouse goes over 
// either the menu title or the submenu itself, and call HideMenuDiv when the
// mouse goes out of the menu title or the submenu iteslf (onMouseOut).

function ShowItem (itemID) {
  var x = document.getElementById(itemID);
  if (x)
    x.style.visibility = "visible";
  return true;
}

function HideItem (itemID) { 
  var x = document.getElementById(itemID);
  if (x)
     x.style.visibility = "hidden";
  return true;
}

//    As noted in the navbar.css file, using x.style.visibility as
//    seen below seemed to have better cross browser support than using 
//    x.style.display="block" and x.style.display="none" to show and hide 
//    the menu.</pre></body></html>