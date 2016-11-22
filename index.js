const Tree = require('./TreeBinary');
var exapleTree = new Tree();

exapleTree.insert(10);
exapleTree.insert(7);
exapleTree.insert(5);
exapleTree.insert(6);

exapleTree.posOrder(exapleTree.getTree());
exapleTree.posOrder(exapleTree.getTree());
exapleTree.preOrder(exapleTree.getTree());
exapleTree.decreasing(exapleTree.getTree());