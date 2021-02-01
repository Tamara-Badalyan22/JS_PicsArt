//funkcianery irencic nerkayacnunen arjeq,vory vochte tvyala ayl gorcoxutyun,drank karum enk copy anenk u ashxatacnenk katarelov kanchy
//function Decleration
function  ourFunction(){
    console.log("Hello from function");
    }
    ourFunction();
    let userName = 'Ann';
    //---
    function showMessage() {
      userName = "john"; // 
    
      let message = 'hi, ' + userName;
      console.log(message);
    }
    
    console.log( userName ); 
    
    showMessage();
    
    console.log( userName ); 
    
    //params
    function showMessage(from,to){
    console.log("From : "+from+" - "+"To : "+to);
    }
    showMessage("Me","You");
    //return type
    function sum(a, b) {
      return a + b;
    }
    
    let result = sum(1, 2);
    console.log( result ); // 3
    //function Expression
    let sayHi = function() {
      console.log( "hey" );
    };
    console.log(sayHi);
    //
    function sayHi1() {   // (1) declare function
      alert( "hi" );
    }
    
    let func = sayHi1;    // (2) copy,ete dneink sayHi1(),ardyunqy kdneeer,funckain iranic artahauytutyunanerkayacnum etenk dnum
    
    func(); // hi    
    sayHi(); // hi  
    //callback Functions
    function ask(number,yes,no){
    if(number>10)
        yes();
    else
      no();
    }
    function yes(){
    console.log("Yes the number is greater than 10");
    }
    function no(){
    console.log("No,the number is not greater than 10");
    }
    ask(5,yes,no);
    //anonimous functions
    let sum1=(a,b)=>a+b;
    console.log(sum1(4,5));
    
    let ask1= (num,y,n)=>(n>20 )? y():n();
    console.log(ask1(25,()=>"Yeeeees",()=>"Nooooo"));