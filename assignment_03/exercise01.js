const dns = require('dns')

// dns.lookup('www.mum.edu', function(err, result) {
//   console.log(result)
// })

dns.resolve4('www.mum.edu', function(err, result) {
    console.log(result)
  })