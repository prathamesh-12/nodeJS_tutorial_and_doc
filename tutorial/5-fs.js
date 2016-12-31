var fs = require('file-system'); // file-system downloaded by npm install file-system

fs.readFile('file/readFile', 'utf8', readFileCallback);

console.log("Before readFile called");

function readFileCallback(error, data) {
  console.log(data);
}

console.log("After readFile called");


fs.writeFile('file/writeFile', 'Hello, this is Dummy Write File content', 'utf8', writeFileCallback);

//Write File : callback fn accpets only one parameter ie error
function writeFileCallback(err) {
  if (err) {
    return;
  }
}

// Copy File
fs.createReadStream('file/readFile').pipe(fs.createWriteStream('file/copiedFile'));
