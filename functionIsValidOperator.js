function isValidOperator(op) {
    const validOperators = ["-", "+", "*", "/"];
  
    if (validOperators.includes(op)) {
      console.log(`${op} is a valid operator.`);
      return true;
    } else {
      console.log(`${op} is not a valid operator.`);
      return false;
    }
  }
  
  // Test cases
  isValidOperator("+");  
  isValidOperator("-"); 
  isValidOperator("*");  
  isValidOperator("/");  
  isValidOperator("%"); 