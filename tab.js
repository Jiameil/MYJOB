关于选项卡切换涉及到的一些知识点

1.选项卡的头部和内容部分是独立的两个div, 头部的内容块和内容部分的块数对应。
2.原生js获取元素的时候，内容部分有多个div的情况，则不能直接通过getElementsByTagName来获取，这里直接下一个函数通过类名来获取。

	function getByClass (oParent, oClass){
		var arr = [];
		var oChild = document.getElementsByTagName('*');

		for ( var i = 0; i < oChild.length; i++ ) {
			if( oChild[i].className == oClass){
				arr.push( oChild[i]);
			}
		}
		return arr;
	}

3.将头部的每个块同内容部分的块联系起来

// 整个js
	function $( id ) {
	    return typeof id === 'string'? document.getElementById( id ):id;
	}
	function getByClass(oParent, oClass) {
	    var arr = [];
	    var oChild = document.getElementsByTagName('*');

	    for (var i = 0; i < oChild.length; i++ ){
	        if( oChild[i].className == oClass ) {
	            arr.push( oChild[i] );
	        }
	    }
	    return arr;
	}
	window.onload = function () {
	    var title = $('tablist').getElementsByTagName('div'),
	        con   = getByClass($('tab-con'), 'mod');

	    if( title.length != con.length ) {
	        return;
	    }

	    for( var i = 0; i < title.length; i++ ) {
	        title[i].ip = i;    //给头部的每个块添加一个ip属性，对应他们的下标

	        title[i].onclick = function () {
	            for ( var j = 0; j < title.length; j++ ) {
	                title[j].className = '';
	                con[j].style.display = 'none';
	        }
	            this.className = 'select';
	            con[this.ip].style.display = 'block';
	        }
	    }
	};