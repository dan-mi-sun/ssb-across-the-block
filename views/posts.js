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
    // inside here would be good if could return
    // the text 
    // console.log(item.value.content.text, index)
    // console.log('-----------')
    return item.value.content.text
    }
  )}


  return html`
  <div>
    <strong>${postData.authorName} blocked: </strong>
    <p>this person: ${postData.contact}</p>
    <p>key of block: ${postData.key}</p>
    <p>backlinks: insert here</p>
    <p>${ backlinksFn(backlinks)}</p>
    <p>backlinksContent: insert here</p>
    <p>-----------------------------</p>
  </div>
  `
}
