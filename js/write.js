(function(wexport) {
	var match_role = [
	{
		token : 'head',
		regex : ''
	}
	];
	
	wexport.Write = function(edit) {
		return new Write(edit);
	};
	
	function Write(edit) {
		var $this = this;
		if ((typeof edit) == "object") {
			this.edit = edit;
		} else {
			this.edit = document.getElementById(edit);
		}

		this.edit.onkeypress = function() {
			$this.onKeyPress($this, event);
		};
		this.edit.oninput = function() {
			$this.onInput($this, event);
		}
	}
	
	Write.prototype.onKeyPress = function() {
		if(event.shiftKey && event.keyCode == 13) { 
			//alert("Key Press.");
		}
		
		document.getElementById("test").innerText = this.edit.innerHTML;
	};
	Write.prototype.onInput = function() {
		document.getElementById("test").innerText = this.edit.innerHTML;
		
		//获取光标位置
		var sel = document.getSelection();
		//获取当前节点路径
		var path = this.getCurrentPath(sel);
		//
		var match = this.getCurrentMark(sel.anchorNode.nodeValue, cursor);
		
		
	};
	//Common Function.
	
	Write.prototype.getCurrentPath = function(cusor) {
		var node = cusor.anchorNode;
		//初始node节点一定是TEXT类型（node.nodeName == #TEXT node.nodeValue == 3）
		var arr = new Array();
		while (node.parentNode.id != "vEdit") {
			arr.push(node.parentNode);
			node = node.parentNode;
		}
		arr.push(node.parentNode);
		
		return arr;
	};
	
	Write.prototype.checkValidatePath = function(path) {
		
	};
	
	Write.prototype.getCurrentMark = function(text, cusor) {
		
		if (text.length > 0) {
			if (text.charAt(0) == '#') {
				if ()
			}
		}
	}
})((function() {
	if (window.write == undefined) {
		window.write = {};
	}
	return window.write;
})());