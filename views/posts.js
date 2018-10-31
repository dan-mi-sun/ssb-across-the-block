var html = require('yo-yo')

module.exports = function Posts (results) {
  return html`
    <div className='app'>
      ${results.map(Post)}
    </div>
  `
}

function Post (postData) {
  //setting this up as a helper to cycle through multiple backlinks where they
  //exist. Initial plan is to only show the first post on a block.
  //Not actually using this at present as can't even get one to show in the 
  //view.
  var backlinks = postData.backlinks
  // console.log(backlinks[0])
  function backlinksFn (bl) {
    bl.forEach(function(item, index, array) {
    // console.log(item.value.content.text, index)
    // console.log('-----------')
    return html`<p>${item.value.content.text}</p>`
    }
  )}

  return html`
  <div>
    <strong>${postData.authorName} blocked: </strong>
    <p>this person: ${postData.contact}</p>
    <p>key of block: ${postData.key}</p>
    <p>backlinks: insert here</p>
    <p>${postData.backlinks[0]}</p>
    <p>backlinksContent: insert here</p>
    <p>-----------------------------</p>
  </div>
  `
}
