class Lexer {
    constructor(code) {
        this.code = code;
        this.position = 0;
        this.tokens = {
            keywords: [],
            operators: [],
            identifiers: []
        };
    }

    // Define patterns for keywords, operators, and identifiers
    static TOKEN_PATTERNS = [
        { type: 'KEYWORD', pattern: /\b(if|else|while|for|return|int|float|char|let|const|var|function)\b/g },
        { type: 'IDENTIFIER', pattern: /\b[a-zA-Z_][a-zA-Z0-9_]*\b/g },
        { type: 'OPERATOR', pattern: /[+\-*/=<>!]+/g }
    ];

    tokenize() {
        let remainingCode = this.code;

        // Loop through each token pattern
        for (let { type, pattern } of Lexer.TOKEN_PATTERNS) {
            let match;
            while ((match = pattern.exec(remainingCode)) !== null) {
                const lexeme = match[0];
                
                // Categorize the tokens
                if (type === 'KEYWORD') {
                    this.tokens.keywords.push(lexeme);
                } else if (type === 'OPERATOR') {
                    this.tokens.operators.push(lexeme);
                } else if (type === 'IDENTIFIER') {
                    if (!this.tokens.keywords.includes(lexeme)) {
                        this.tokens.identifiers.push(lexeme);
                    }
                }
            }
        }
        
        return this.tokens;
    }
}

// Test the Lexer with input code
const code = `
let x = 10;
if (x > 5) {
    x = x + 1;
    return x;
}
`;

const lexer = new Lexer(code);
const result = lexer.tokenize();

console.log("Keywords:", result.keywords);
console.log("Operators:", result.operators);
console.log("Identifiers:", result.identifiers);