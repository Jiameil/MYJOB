// js获取非行间样式
// getStyle(要获取的对象, '属性名')
function getStyle( obj, name ) {   
	if(obj.currentStyle) {
		//IE
		return obj.currentStyle.name; 
	}else {
		//chrome firefox
		return getComputedStyle(obj, false)[name];
	}
}

// 通过类名获取元素
// getByClassName('父级元素', '子元素的类名')
function getByClassName(oParent, oClass) {
		var arr = [];

		var oChild = document.getElementsByTagName('*');

		for( var i = 0; i < oChild.length; i++) {
			if( oChild[i].className == oClass ) {
				arr.push( oChild[i] );
			}
		}
		return arr;
}