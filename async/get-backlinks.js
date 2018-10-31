var pull = require('pull-stream')

module.exports = function getBacklinks (server) {
  return function (data, donecb) {
    function createBacklinkStream (id) {
      var filterQuery = {
        $filter: {
          dest: id 
        }
      }
      return server.backlinks.read({
        query: [filterQuery],
        index: 'DTA'
      })
    }

    pull(
      createBacklinkStream(data.key),
      pull.collect((err, backlinks) => {
        if (err) return donecb(err)
        
        data.backlinks = backlinks
        donecb(null, data)
      })
    )
  }
}
