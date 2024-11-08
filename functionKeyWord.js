function isCKeyword(str) {
    // List of all C keywords
    const cKeywords = [
      "auto", "break", "case", "char", "const", "continue", "default", 
      "do", "double", "else", "enum", "extern", "float", "for", "goto", 
      "if", "int", "long", "register", "return", "short", "signed", 
      "sizeof", "static", "struct", "switch", "typedef", "union", 
      "unsigned", "void", "volatile", "while"
    ];
  
    // Check if the string is in the keywords array
    if (cKeywords.includes(str)) {
      console.log(`${str} is a C keyword.`);
      return true;
    } else {
      console.log(`${str} is not a C keyword.`);
      return false;
    }
  }
  
  // Test cases
  isCKeyword("int");    // Output: int is a C keyword.
  isCKeyword("main");   // Output: main is not a C keyword.
  isCKeyword("return"); // Output: return is a C keyword.
  isCKeyword("hello");  // Output: hello is not a C keyword.