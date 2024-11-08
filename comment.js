class CommentDetector {
    constructor(code) {
        this.code = code;
        this.comments = [];
        this.nonComments = [];
    }

    detectComments() {
        const lines = this.code.split('\n');
        
        let inMultilineComment = false;

        for (let line of lines) {
            line = line.trim(); // Remove extra whitespace
            
            // Check for single-line comment
            if (line.startsWith('//')) {
                this.comments.push(line);
            }
            // Check for start of multi-line comment
            else if (line.startsWith('/*')) {
                inMultilineComment = true;
                this.comments.push(line);
            }
            // Check for end of multi-line comment
            else if (inMultilineComment) {
                this.comments.push(line);
                if (line.endsWith('*/')) {
                    inMultilineComment = false;
                }
            }
            // If not in a comment, treat as non-comment code
            else {
                this.nonComments.push(line);
            }
        }

        return {
            comments: this.comments,
            nonComments: this.nonComments
        };
    }
}

// Test the CommentDetector
const code = `
int x = 10; // Initialize x
/* Multi-line
   comment block */
if (x > 5) {
    console.log("x is greater than 5");
}
`;

const detector = new CommentDetector(code);
const result = detector.detectComments();

console.log("Comments:", result.comments);
console.log("Non-Comments:", result.nonComments);