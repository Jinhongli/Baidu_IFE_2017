var rootElement = Util.$('root');
var menu = Util.$('menu');

function showMenu(menu, position){
	var x = position.x;
	var y = position.y;
	var winW = document.body.clientWidth || document.documentElement.clientWidth;
    var winH = document.body.clientHeight || document.documentElement.clientHeight;
    var offsetX = 10, offsetY = 10;
    var menuWidth = 120, menuHeight = 80;
    console.log(x, winW);
    if(winW-x <= menuWidth){
    	offsetX = -menuWidth;
    }
    if(winH-y <= 1.5*menuHeight){
    	offsetY = -menuHeight;
    }
	menu.style.left = (x+offsetX) + 'px';
	menu.style.top = (y+offsetY) + 'px';
	menu.style.display = 'block';
}

function menuHandler(e) {
	e.preventDefault();
	console.log('show menu');
	showMenu(menu, Util.getCusorPosition(e));
}

function clickHandler(e) {
	console.log('hide menu');
	menu.style.display = 'none';	
}
function menuClickHandler(e) {
	e.stopPropagation();
	if(e.target.parentNode === menu.children[0]){
		console.log('click menu item 1');
	}else if(e.target.parentNode === menu.children[1]){
		console.log('click menu item 2');
	}
}

Util.addEvent(rootElement, 'contextmenu', menuHandler);
Util.addEvent(document, 'click', clickHandler);
Util.addEvent(menu, 'click', menuClickHandler);