var Util = (function () {
	return {
		$: function (id) {
			return document.getElementById(id);
		},

		getStyle: function (element, style) {
			if(window.getComputedStyle){
				return window.getComputedStyle(element)[style];
			}else{
				return parseInt(element.style[style]);
			}
		},
		setStyle: function (element,style) {
			var key;
			for(key in style){
				element.style[key] = style[key];
			}
		},
		extend: function (target, source) {
			var key;
			for(key in source){
				if(source.hasOwnProperty(key)){
					target[key] = source[key];
				}
			}
			return target;
		},

		addEvent: function (element, event, callback, useCapture) {
			useCapture = useCapture || false;
			if(window.addEventListener){
				element.addEventListener(event, callback, useCapture);
			}else if(window.attachEvent){
				element.attachEvent('on'+event, callback);
			}else{
				element['on'+event] = callback;
			}
		},

		removeEvent: function (element, event, func) {
			if(window.addEventListener){
				element.removeEventListener(event, func);
			}else if(window.attachEvent){
				element.detachEvent('on'+event, func);
			}else{
				element['on'+event] = null;
			}
		},

		getCusorPosition: function (e) {
			e = e || window.event;
			var x = e.clientX;
			var y = e.clientY;
			
        	return {
        		x: x,
        		y: y
        	}
		}
	};
})();