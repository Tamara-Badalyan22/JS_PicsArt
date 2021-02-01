//funckiain vopres param poxancum enk funcia	
function a(b){
	console.log("Hey");
  if(typeof b === 'function')
		b();
}
a(() => console.log("Hello"));
//ete uzum enk  vor callback functiony stana paramner->grel wrapper

function example(sum){
console.log("Sum");
if(typeof sum === 'function')
	sum();
}
function sum(a,b){
	console.log(a+b);
}
function sumWrapper(){
	sum(5,6);
}
example(sumWrapper);
example(() => sum(1,1));//kam senc

//promisec-js-um ansixron gorcoxutyunery kazmakerpelu gorciq