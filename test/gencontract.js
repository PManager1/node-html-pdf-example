var fs = require('fs');
var pdf = require('html-pdf');

// var pdf = require('phantom');

var html = fs.readFileSync('contract.html', 'utf8');


// var options = { format: 'Letter' , "timeout": 30000 };

var options = { "height": "10.63in", "width": "10.16in", "timeout": 30000, };




// pdf.create(html, options).toFile('LETTER.pdf', function(err, res) {	
pdf.create(html, options).toFile('contract_10.16by_10.63.pdf', function(err, res) {	
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' }
});