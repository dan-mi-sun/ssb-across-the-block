var html = require('yo-yo')

module.exports = function Posts (results) {
  return html`
    <div className='app'>
      ${results.map(Post)}
    </div>
  `
}

function Post (postData) {
// could do some logic and error handelling here. pospi doesn't have an author name e.g. so we could give a default
  return html`
  <div>
    <strong>${postData.authorName} blocked: </strong>
    <p>key: ${postData.key}</p>
    <p>${postData.contact}</p>
    <p>backlinks: insert here</p>
    <p>${postData.backlinks}</p>
    <p>backlinksContent: insert here</p>
    <p>-----------------------------</p>
  </div>
  `
}
