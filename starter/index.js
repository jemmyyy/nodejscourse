const fs = require('fs')
let textOut = ''; 
let text1 = fs.readFile('./txt/input.txt', 'utf-8', (err, data) => {
    console.log(data); 
    textOut = `Avocado1: ${data}.\nCreated on ${Date.now()}.`
    fs.writeFile('./txt/output1.txt', textOut, () => {console.log('Data Written!')})
    console.log('Writing Data...')
})
console.log('Reading Data...')
