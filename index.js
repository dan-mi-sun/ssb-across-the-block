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
      }, {
        $map: {
          author: ['value', 'author'],
          text: ['value', 'content', 'text'],
          timestamp: ['value', 'timestamp'],
        }
      }
    ]
  }

  var onDone = function (error, results) {
    results.forEach(result => {
      console.log(result)
      console.log('----')
    })

    console.log(results.length)
    server.close()
  }
  pull(
    server.query.read(opts), // the source
    pull.collect(onDone) // the sink, onDone is inMemory, pull.drain gives each result as it comes down the pipe use with console.log()
  )
})

