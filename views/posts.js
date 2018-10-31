var html = require('yo-yo')

module.exports = function Posts (results) {
  return html`
    <div className='app'>
      ${results.map(Post)}
    </div>
  `
}

function Post (postData) {
//I am trying to figure out the shape of backlinks and how to 
// -[ ] access them
// -[ ] display them

  var backlinks = postData.backlinks
  function backlinksFn (bl) {
    bl.forEach(function(item, index, array) {
    console.log(item, index)
    console.log('-----------')
  }
  )}

  backlinksFn(backlinks)

  return html`
  <div>
    <strong>${postData.authorName} blocked: </strong>
    <p>key: ${postData.key}</p>
    <p>${postData.contact}</p>
    <p>backlinks: insert here</p>
    <p>backlinksContent: insert here</p>
    <p>-----------------------------</p>
  </div>
  `
}
