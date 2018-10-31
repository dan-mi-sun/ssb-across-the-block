var html = require('yo-yo')

module.exports = function Posts (results) {
  return html`
    <div className='app'>
      ${results.map(Post)}
    </div>
  `
}

function Post (postData) {
  return html`
  <div>
    <strong>${postData.authorName} blocked: </strong>
    <p>this person: ${postData.contact}</p>
    <p>key of block: ${postData.key}</p>
    <p>backlinks: </p>
    <ul>${Backlinks(postData.backlinks)}</ul>
    <p>-----------------------------</p>
  </div>
  `
}

function Backlinks (bl) {
  return bl.map((item) => html`
      <li>${item.value.content.text}</li>
    `
  )    
}
