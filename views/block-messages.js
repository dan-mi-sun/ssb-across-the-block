var html = require('yo-yo')

module.exports = function BlockMessages (results) {
  return html`
    <div className='app'>
      ${results.map(BlockMessage)}
    </div>
  `
}

function BlockMessage (postData) {
// could do some logic and error handelling here. pospi doesn't have an author name e.g. so we could give a default
  return html`
  <div>
    <strong>${postData.authorName} blocked: </strong>
    <p>key: ${postData.key}</p>
    <p>${postData.contact}</p>
    <p>backlinks: insert here</p>
    <p>backlinksContent: insert here</p>
  </div>
  `
}
