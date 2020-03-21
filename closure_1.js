//---------------------------Release - 0-----------------------
//
var firstCounter = createCounter();

                function createCounter(){
		let count = 0; 
				
	      return function(){                           
							                               
	                  console.log(count++);

                	}
		}

                firstCounter();//0
                firstCounter();//1
                firstCounter();//2
                firstCounter();//3

//--------------------------Release - 1-------------------------


var fullname = 'John Doe';
var obj = {
	   fullname: 'Colin Ihrig',
	   prop: {
		         fullname: 'Aurelio De Rosa',
		         getFullname: function() {
				          return this.fullname;
				       }
		      }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname; // here it returns the getFullname funtion i.e., () =>  this.fullname , fullname is variable defind on the top of obj object

console.log(test());//here test is a function


//----------------------- Release - 2-----------------------------

var a = 1; 
function b() { 
	    a = 10; // block scope this var a can be access in the b() function only
	    return; //there is no return value
	    function a() {} //this is empty function
} 
b(); //this function is not returning anything
console.log(a);    // so here a value is 1
