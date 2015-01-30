function convertToF() {
  
  // Store user input in a variable
  var userInput = document.getElementById("celcius").value;

  // Checks if the user has entered a value

  if (userInput === "") { 
  
    var el = document.getElementById("theResultF");
    el.textContent = "Please enter a value to convert"; 
  
  } else {
    
  // calculate F equivalent
  
  var fTemp; 
  fTemp = userInput * 9/5 + 32;
  fTemp = +fTemp.toFixed(0); // Rounds to no decimals
  
  // Gets div 
  
  var div = document.getElementById("theResultF");
  
  // Sets div to result
    
  div.textContent = userInput + "C is " + fTemp + "F ";

  }

  
}

function convertToC() {
  
  // Store user input in a variable
  var userInput = document.getElementById("fahr").value;

  // Checks if the user has entered a value

  if (userInput === "") { 
  
    var el = document.getElementById("theResultC");
    el.textContent = "Please enter a value to convert"; 
  
  } else {
    
  // calculate C equivalent
  
  var cTemp; 
  cTemp = (userInput - 32) * 5/9;
  cTemp = +cTemp.toFixed(1); // Rounds to one decimal
    
  // Gets div 
  
  var div = document.getElementById("theResultC");
  
  // Sets div to result
    
  div.textContent = userInput + "F is " + cTemp + "C ";

  }
  
}