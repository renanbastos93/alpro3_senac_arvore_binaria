const Node = require('./Nodo');

function Tree(){
	this._root = null;
};

//Insert
Tree.prototype.insert = function(val){

	var _root = this._root;

	if(!_root){
		this._root = new Node(val);
		return;
	}

	var currentNode = _root;
	var newNode = new Node(val); 

	while(currentNode){
		if(val < currentNode._data){
			if(!currentNode._left){
				currentNode._left = newNode;
				break;
			}
			else{
				currentNode = currentNode._left;
			}
		}
		else{
			if(!currentNode._right){
				currentNode._right = newNode;
				break;
			}
			else{
				currentNode = currentNode._right;
			}
		}
	}

};

//Return Tree
Tree.prototype.getTree = function(){
	return this._root;
};

//Query Searsh

Tree.prototype.query = function(pNode){

};

//Print Tree in Order
Tree.prototype.inOrder = function (pNode){
	if(pNode != null){
		this.inOrder(pNode.getLeft());
		console.log(pNode._data);
		this.inOrder(pNode.getRight());
	}
};

//Print Tree Order
Tree.prototype.posOrder = function (pNode){
	if(pNode != null){
		this.posOrder(pNode.getLeft());
		this.posOrder(pNode.getRight());
		console.log(pNode._data);
	}
};

//Print Tree Pre Order
Tree.prototype.preOrder = function (pNode){
	if(pNode != null){		
		console.log(pNode._data);
		this.preOrder(pNode.getLeft());
		this.preOrder(pNode.getRight());
	}
};

//Print Tree Decreasing
Tree.prototype.decreasing = function (pNode){
	if(pNode != null){		
		this.decreasing(pNode.getRight());
		console.log(pNode._data);
		this.decreasing(pNode.getLeft());
	}
};

//Export
module.exports = Tree;
