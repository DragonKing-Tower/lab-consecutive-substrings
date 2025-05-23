function consecutiveSubstrings(string) {
	if (typeof string !== "string") {
		return "Error, please input a string";
	}

	// type your code here
	const stringArray = string.split(""); //turn the string into an array so we can accesss each character individually
	const returnArray = []; //defined here for constant pushes and eventual return

	/* Time complexity is On^2 because for each character in the string, 
   the code has to iterate through the remaining characters to build all substrings. 
   This nested iteration is necessary to generate every consecutive substring. This means
   that the number of calculations that have to be done is n!+(n-1)!+(n-2)!... until (n-(n-1)). 
   This is not exactly n^2 but is On^2 because the rate of increase in calculations
   as n goes up is quadratic.*/
	for (let index = 0; index < stringArray.length; index++) {
		//grab every character in order
		let characters = stringArray[index];
		returnArray.push(characters); //return the character before we start adding other characters to it
		for (
			let innerIndex = index + 1;
			innerIndex < stringArray.length;
			innerIndex++
		) {
			/*grab every character that is after the currently grabbed character, 
      contacate it, then return that combination*/
			const nextCharacter = stringArray[innerIndex];
			characters += nextCharacter;
			returnArray.push(characters);
		}
	}
	return returnArray; //return the final array with every combination of character/characters in it
}

if (require.main === module) {
	// add your own tests in here
	console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
	console.log("=>", consecutiveSubstrings("abc"));

	console.log("");

	console.log("Expecting: ['a']");
	console.log("=>", consecutiveSubstrings("a"));

	console.log(`Expecting: [
  'A',    'A ',    'A t',
  'A tE', 'A tEs', 'A tEst',
  ' ',    ' t',    ' tE',
  ' tEs', ' tEst', 't',
  'tE',   'tEs',   'tEst',
  'E',    'Es',    'Est',
  's',    'st',    't'
]`);
	console.log(consecutiveSubstrings("A tEst"));

	console.log(`Expecting: [
  '1',    '19', '193',
  '1935', '9',  '93',
  '935',  '3',  '35',
  '5'
]`);
	console.log(consecutiveSubstrings("1935"));

	console.log("Expecting: Error, please input a string");
	console.log(consecutiveSubstrings(1976));
}

module.exports = consecutiveSubstrings;
