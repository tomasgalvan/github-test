/* JavaScript Test Code Template
   Tomas
   02-01-16

   This files contains some shortcut functions
   to manipulate the values for two input textboxes.
   It also sets up an event handler to handle
   button clicks on the page.
*/

// USER CODE - Put your code here!

var myArray = [];

function addText1ToList(){
    if(domInput1() != "") {
		myArray.push(domInput1());
	}

  }


function printListToTextOutput()
{
	domTextOutput(myArray.join(", "));
	// modified to use a loop to print
	var outputStr = "";

	for(var i=0; i<myArray.length; i++) {
		outputStr += myArray[i];
		if(i<myArray.length-1) {
			outputStr += ", ";
		}
	}

	// alternate output option - numbered list

	for(var i=0; i<myArray.length; i++) {
		outputStr += (i+1) + ") ";
		outputStr += myArray[i];
		if(i<myArray.length-1) {
			outputStr += "<br />";
		}
	}

	domTextOutput(outputStr);
}

function addItem2ToBeginningOfList()
{
	 myArray.unshift();
	// Add item to the beginning of the list using loops
	if(domInput2() != "") {
		// I will use a loop to shift items in the array
		for(var i=myArray.length; i>0; i--) {
			myArray[i] = [myArray-1];
		}
		// now add item to beginning of array
		myArray[0] = domInput2();
	}


}


// This function is called every time the button is clicked
function handleGoButtonClick(event) {
	// do events here
	// push input 1 text to list
	addText1ToList();
	// clear contents of input 1
	domInput1("");

	// *** BONUS ***
	// call function to add input 2 to beginning of list
	addItem2ToBeginningOfList();
	// clear contents of input 2
	domInput2("");
	// *** END BONUS ***

	// call function to print list to Text Output
  printListToTextOutput()


}



// HELPER FUNCTIONS - The following code is helper functions to get you started

// This function sets and returns the value of Input 1
function domInput1(newval) {
	var input1Reference = document.getElementById("input1Id");
	if(newval !== undefined) {
		input1Reference.value = newval;
	}
	return input1Reference.value;
}

// This function sets and returns the value of Input 2
function domInput2(newval) {
	var input2Reference = document.getElementById("input2Id");
	if(newval !== undefined) {
		input2Reference.value = newval;
	}
	return input2Reference.value;
}

// This function sets and returns the value of Input 2
function domTextOutput(newval) {
	var textOutputReference = document.getElementById("textOutputId");
	if(newval !== undefined) {
		textOutputReference.innerHTML = newval;
	}
}

/* This is an Immediately Invoked Function Expression (IIFE)
   The code here runs immediately after the page loads.
   In this case, we are setting up an event handler for
   button presses.
*/
(function() {
	document.getElementById("goBtnId").onclick = handleGoButtonClick;
}());
