
function Nodo(data){
	this._data 	= data;
	this._left = null;
	this._right = null;
};

//Sets
Nodo.prototype.setData = function(data){
	this._data = data;
};
Nodo.prototype.setRight = function(right){
	this._right = right;
};
Nodo.prototype.setLeft = function(left){
	this._left = left;
};

//Gets
Nodo.prototype.getData = function(){
	return this._data;
};
Nodo.prototype.getRight = function(){
	return this._right;
};
Nodo.prototype.getLeft = function(){
	return this._left;
};

//Print
Nodo.prototype.print = function(){
	return {
		data: this._data,
		left: this._left,
		right: this._right
	}
};

//Export
module.exports = Nodo;