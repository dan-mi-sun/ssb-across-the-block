var connection = require('ssb-client')
var pull = require('pull-stream')

connection(function (error, server) {
  if (error) console.log(`This is the error: ${error}`)
  var opts = {
    reverse: true,
    query: [
      {
        $filter: {
          value: {
            content: {
              type: 'post'
            }
          }
        }
      }
    ]
  }

  var onDone = function (error, results) {
    results.forEach(msg => {
      console.log(msg.value.content)
      console.log('----')
    })
    server.close()
  }
  pull(
    server.query.read(opts),
    pull.take(10), 
    pull.collect(onDone)
  )
})
