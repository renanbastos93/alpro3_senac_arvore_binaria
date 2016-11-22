function Check(chunk){
	let msg = {};
	if(chunk.indexOf('/insert') === 0){
		msg.insert = chunk.replace('/insert', '');
	}
	if(chunk.indexOf('/insertFile') === 0){
		msg.insertFile = true;
	}
	if(chunk.indexOf('/query') === 0){
		msg.query = chunk.replace('/query', '');
	}
	if(chunk.indexOf('/inOrder') === 0){
		msg.inOrder = true;
	}
	if(chunk.indexOf('/posOrder') === 0){
		msg.posOrder = true;
	}
	if(chunk.indexOf('/preOrder') === 0){
		msg.preOrder = true;
	}
	if(chunk.indexOf('/desc') === 0){
		msg.decreasing = true;
	}
	if(chunk.indexOf('/clear') === 0){
		process.stdout.write('\x1Bc');
	}
	return msg;
};

module.exports = Check;