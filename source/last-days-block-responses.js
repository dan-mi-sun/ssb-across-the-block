//this is the space which will shape the inside of the Block Response
//need file which is a composite of lastDaysBlocks && lastDaysBlockResponses

module.exports = function lastDaysBlockResponses (server) {
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
          key: ['key'],
          author: ['value', 'author'],
          timestamp: ['value', 'timestamp'],
          root: ['value', 'content', 'root'],
          branch: ['value', 'content', 'branch'],
          text: ['value', 'content', 'text']

        }
      }
    ]
  }
  return server.query.read(opts)
}
