const fs	= require('fs');
const Tree 	= require('./TreeBinary');
const check	= require('./util/checks');
const read 	= require('./util/keyboard');

var exapleTree = new Tree();

function insertfile(){
	let lines = fs.readFileSync('routes.txt', 'utf-8').split(',');///\r?\n/
	for(line in lines){
		exapleTree.insert(lines[line].trim());
	}
};

function insert(n){
	exapleTree.insert(n);
};

process.nextTick(function(){
	process.nextTick(function(){
		read.line((chunk) => {
			let msg = check(chunk);
			if(msg.insert){
				process.nextTick(() => insert(msg.insert) );
			}
			if(msg.insertFile){
				process.nextTick(insertfile);
			}
			if(msg.query){
				process.nextTick(() => {
					process.nextTick(() => { console.log(exapleTree.query(msg.query)) });
				});
			}
			if(msg.inOrder){
				process.nextTick(() => exapleTree.inOrder(exapleTree.getTree()) );
			}
			if(msg.posOrder){
				process.nextTick(() => exapleTree.posOrder(exapleTree.getTree()) );
			}
			if(msg.preOrder){
				process.nextTick(() => exapleTree.preOrder(exapleTree.getTree()) );
			}
			if(msg.decreasing){
				process.nextTick(() => exapleTree.decreasing(exapleTree.getTree()) );
			}
		});
	});
});