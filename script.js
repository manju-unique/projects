/* For Storing numbers and operators for calculation */
let input = "";

function func7() 
{
   if( input.length >= 17)
   {
      alert("Input Excedeed\n")
   }
   else
   {
      let number = 7;
      input += number.toString();
      document.getElementById("res").innerHTML = input; 
   }
}

function func8 () 
{  
   if( input.length >= 17)
   {
      alert("Input Excedeed\n")
   }
   else
   {
      let number = 8;
      input += number.toString();
      document.getElementById("res").innerHTML = input;
   }
}

function func9 () 
{
   if( input.length >= 17)
   {
      alert("Input Excedeed\n")
   }
   else
   {
      let number = 9;
      input += number.toString();
      document.getElementById("res").innerHTML = input;
   }
}

function func_divide()
{
   if( input.length >= 17)
   {
      alert("Input Excedeed\n")
   }
   else
   {
      let operator = "/";
      input += operator.toString();
      document.getElementById("res").innerHTML = input;
   }

}


function func4() 
{
   if( input.length >= 17)
   {
      alert("Input Excedeed\n")
   }
   else
   {
      let number = 4;
      input += number.toString();
      document.getElementById("res").innerHTML = input; 
   }
}

function func5 () 
{
   if( input.length >= 17)
   {
      alert("Input Excedeed\n")
   }
   else
   {
      let number = 5;
      input += number.toString();
      document.getElementById("res").innerHTML = input;
   }
}

function func6() 
{ 
   if( input.length >= 17)
   {
      alert("Input Excedeed\n")
   }
   else
   {
      let number = 6;
      input += number.toString();
      document.getElementById("res").innerHTML = input;
   }
}

function func_mul() 
{
   if( input.length >= 17)
   {
      alert("Input Excedeed\n")
   }
   else
   {
      let operator = "*";
      input += operator.toString();
      document.getElementById("res").innerHTML = input;
   }

}

function func1() 
{
   if( input.length >= 17)
   {
      alert("Input Excedeed\n")
   }
   else
   {
      let number = 1;
      input += number.toString();
      document.getElementById("res").innerHTML = input; 
   }
}

function func2 () 
{
   if( input.length >= 17)
   {
      alert("Input Excedeed\n")
   }
   else
   {
      let number = 2;
      input += number.toString();
      document.getElementById("res").innerHTML = input;
   }
}

function func3 () 
{
   if( input.length >= 17)
   {
      alert("Input Excedeed\n")
   }
   else
   {
      let number = 3;
      input += number.toString();
      document.getElementById("res").innerHTML = input;
   }
}

function func_minus() 
{
   if( input.length >= 17)
   {
      alert("Input Excedeed\n")
   }
   else
   {
      let operator = "-";
      input += operator.toString();
      document.getElementById("res").innerHTML = input;
   }

}

function func_clear() 
{
   if( input.length >= 17)
   {
      alert("Input Excedeed\n")
   }
   else
   {
   document.getElementById("res").innerHTML = null;
   input = "";
   }
  
}

function func_dot() 
{  if( input.length >= 17)
   {
      alert("Input Excedeed\n")
   }
   else
   {
      let operator = ".";
      input += operator.toString();
      document.getElementById("res").innerHTML = input;
   }
}

function func_equal() 
{ if( input.length >= 17)
   {
      alert("Input Excedeed\n")
   }
   else{
   let result = eval(input);
   output = result.toString();
   document.getElementById("res").innerHTML = output;
   }
}

function func_plus() {
   if( input.length >= 17)
   {
      alert("Input Excedeed\n")
   }
   else
   {
      let operator = "+";
      input += operator.toString();
      document.getElementById("res").innerHTML = input;
   }

}





