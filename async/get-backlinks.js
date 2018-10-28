var pull = require('pull-stream')

module.exports = function getBacklinks (server) {
  return function (data, donecb) {
  console.log('data: ' + data)
    var opts = {
      reverse: true,
      limit: 1,
      query: [
        {
          $filter: {
            dest: data.id
          }
        }
      ]
    }

    donecb(null, data)
  }
}

