const { basename } = require('path');
const path = require('path')

// path.join(takes arg in sewuence of the location of the basename(the file gan gan))

console.log(path.join('/content', 'sub-folder', 'text.txt'));
// path.sep
console.log('2nd part');

//absolute path
console.log(path.resolve(__dirname, './content', 'sub-folder', 'text.txt'));
console.log(__dirname);