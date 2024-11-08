function isValidArray(arr) {
    // Check if the array has at least two elements
    if (arr.length < 2) {
      console.log("Invalid: Array should have at least two elements.");
      return false;
    }
  
    const isLetter = (char) => /^[A-Z]$/i.test(char); // Checks if it's a letter
    const isDigit = (char) => /^[0-9]$/.test(char);   // Checks if it's a digit
  
    const firstValid = isLetter(arr[0]) || arr[0] === '-'; // First element validation
    const secondValid = isLetter(arr[1]) || isDigit(arr[1]) || arr[1] === '-'; // Second element validation
  
    if (firstValid && secondValid) {
      console.log("Valid");
      return true;
    } else {
      console.log("Invalid");
      return false;
    }
  }
  
  // Test cases
  isValidArray(['A', '1']);  // Valid
  isValidArray(['-', '-']);  // Valid
  isValidArray(['B', 'Z']);  // Valid
  isValidArray(['1', 'A']);  // Invalid (first is not a letter or '-')
  isValidArray(['-', '8']);  // Valid
  isValidArray(['C']);       // Invalid (not enough elements)