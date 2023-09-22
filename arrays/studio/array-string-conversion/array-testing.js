let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//2) 
function reverseCommas(protoArray) {
	//TODO: 1. create and instantiate your variables.
	let output;
	let convertedArray;

	//TODO: 2. write the code required for this step
	if (protoArray.includes(',')) {
		convertedArray = protoArray.split(',');
		convertedArray.reverse();
	}

	output = convertedArray.join(',');

	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return output;
}


//3)
function semiDash(protoArray) {
	let convertedArray;
	let output;
//TODO: write the code required for this step
if (protoArray.includes(';')) {
	convertedArray = protoArray.split(';').sort();
	output = convertedArray.join('-');
}
  
	return output;
}


//4)
function reverseSpaces(protoArray) {
	let convertedArray;
	let output;
  //TODO: write the code required for this step
	if (protoArray.includes(' ')) {
		convertedArray = protoArray.split(' ').sort().reverse();
		output = convertedArray.join(' ');
	}

	return output;
}

//5)
function commaSpace(protoArray) {
	let convertedArray;
	let output;
	//TODO: write the code required for this step
	if (protoArray.includes(', ')) {
		convertedArray = protoArray.split(', ').reverse();
		output = convertedArray.join(', ');
	}

	return output;
}


// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};
