const fs = require('fs');

function countWordsInFile(filename) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    // Split the contents by whitespace (space, tab, newline) to count words
    const words = data.split(/\s+/).filter(word => word !== '');
    const wordCount = words.length;

    console.log(`Total word count in "${filename}": ${wordCount}`);
  });
}

const filename = 'data.txt';
countWordsInFile(filename);
