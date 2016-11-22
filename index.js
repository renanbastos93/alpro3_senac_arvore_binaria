const Tree 	= require('./TreeBinary');
const fs	= require('fs');
var exapleTree = new Tree();
var count = 0;

fs.readFile('routes.txt', 'utf-8', function(err, data){
	let lines = data.split(/\r?\n/);
	count = lines.length;
	for(let line in lines){
		exapleTree.insert(lines[line]);
	}

});

setInterval(function(){
	if(exapleTree.getTree())
		clearInterval(this);
	exapleTree.inOrder(exapleTree.getTree());
// exapleTree.posOrder(exapleTree.getTree());
// exapleTree.preOrder(exapleTree.getTree());
// exapleTree.decreasing(exapleTree.getTree());
}, count);