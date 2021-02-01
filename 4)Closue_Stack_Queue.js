const createStack = () => {
	let array = [];
  
  return {
  	size : function () {
   		return array.length;
    },
    isEmpty : function () {
    	return array.lentgh == 0;
    },
    push : function (value) {
    	array.push(value);
    },
    pop : function () {
    	if(isEmpty())
      	return;
      array.pop(array.length - 1);
    },
    peek : function () {
    	if(isEmpty())
      	return;
      return  array[array.length - 1];
    }  
  }
}
const createQueue = () => {
	let firstStack = createStack();
  let secondStack = createStack();
  
  return {
  	getSize : function () {
    	return secondStack.size();
    },
    isEmpty : function () {
    	return secondStack.size() == 0;
    },
    enqueue : function (value) {
    	firstStack.push(value);
    },
    dequeue : function () {
    	while(firstStack.size() > 0){
      	let tmp = firstStack.pop();
        secondStack.push(tmp);
      }
      return secondStack.pop();
    },
    peek : function () {
    	while(firstStack.size() > 0){
      	let tmp = firstStack.pop();
        secondStack.push(tmp);
      }
      return secondStack.peek();
    }
  }
}