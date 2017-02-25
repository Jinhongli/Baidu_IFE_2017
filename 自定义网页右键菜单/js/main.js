var rootElement = Util.$('root');
var menu = Util.$('menu');

function showMenu(menu, position){
	var x = position.x;
	var y = position.y;
	console.log(x, y);
	menu.style.left = (x+10) + 'px';
	menu.style.top = (y+10) + 'px';
	menu.style.display = 'block';
}

function menuHandler(e) {
	e.preventDefault();
	if(e.which === 3){
		console.log('show menu');
		showMenu(menu, Util.getCusorPosition(e));
	}
	// return false;
}

function clickHandler(e) {
	if(e.target !== menu && e.which === 1){
		console.log('hide menu');
		menu.style.display = 'none';
		return false;
	}
	
}

Util.addEvent(rootElement, 'contextmenu', menuHandler);
Util.addEvent(document, 'click', clickHandler);