var sbot = require('ssb-client')
const pull = require('pull-stream')

var relatedMessages = []

sbot(function (error, server) {
  if (error) console.log(`This is the error: ${error}`)
  function createBacklinkStream (id) {
    var filterQuery = {
      $filter: {
        dest: id
      }
    }
    console.log('here is the id ' +  id)
    return server.backlinks.read({
      query: [filterQuery],
      index: 'DTA', // use asserted timestamps
      live: true
    })
  }

  // var onDone = function (error, results) {
  //   results.forEach(msg => {
  //     console.log(msg.value.content)
  //     console.log('----')
  //     relatedMessages.push(msg)
  //   })
  //
  //   console.log(results.length)
  //   server.close()
  // }

  const msgKey = '%n2iq29AiNz7Z83i5VboY0izsoADQlYfbxBGrRcATGCg=.sha256'

  pull(
    createBacklinkStream(msgKey),
    pull.filter(msg => !msg.sync),
      // note the 'live' style streams emit { sync: true } when they're up to date!
    pull.drain(msg => {
      console.log(msg.value.content)
      console.log('----')
      relatedMessages.push(msg)
    })
  )
})
