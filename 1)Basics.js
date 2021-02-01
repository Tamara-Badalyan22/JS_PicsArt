console.log('hellooooo');
//dataTypes(primitive)
//---1)number---
let n=123;
n=212.8;
console.log(n);
//2)Infinity
console.log(1/0);//inf
console.log(Infinity);//inf
//3)Nan
console.log("hey"/2);//nan
//4)bigInt
const bigInt=21335415341534n;
//math exp~ are safe,there's no exception

//--5)string
let message="hello!";
//"" '' same
//`` use for this cases
let name="John";
console.log(`Hello,${name}`);
//--6)boolean
let nameFieldChecked = true;
let isGreater = 4 > 1;
console.log(isGreater);
//null,undefined
let age=null;
age=undefined;
let color;
console.log(color);//undefined
//typeOf
typeof(age);
typeof(message);
typeof(null);//object->bug in JS

//casting
//nan->0
//undefined->nan
let value=true;
console.log(value);
value = String(value);//same for numebr
console.log(typeof(value));//string
console.log("6"/"3");//2->number
console.log(Boolean("Hello"));//true
console.log(Boolean(""));//false
//math exp~s->+,*,++,-- etc
console.log("" + 1 + 0);//= "10" 
console.log("" - 1 + 0 );//= -1 
console.log(true + false);// = 1
console.log(6 / "3" );//= 2
console.log("2" * "3");// = 6
console.log(4 + 5 + "px");// = "9px"
console.log("$" + 4 + 5 );//= "$45"
console.log("4");// - 2 = 2
console.log("4px");// - 2 = NaN
console.log(7 / 0);// = Infinity
console.log("  -9  ");// + 5 = "  -9  5" 
console.log("  -9  ");// - 5 = -14 
console.log(null + 1 );//= 1 
console.log(undefined + 1); //= NaN 
console.log(" \t \n" - 2);// = -2 
//==include casting
//===NO CASTING
console.log( null > 0 );  // (1) false
console.log( null == 0 ); // (2) false
console.log( null >= 0 ); // (3) true->include casting
