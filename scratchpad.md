# QUESTIONS:

- in app.js how best to pass around block.key to check blockResponse.root 
- app.js: SOURCE the pull gets lastDaysBlocks which finds blocks and prunes server side to produce a particular shape returns the output of the filter and map
- app.js: that then flows THROUGH getName (get-name.js) which **makes call to server** filters based on the data.author (which is a hash). the "collect" then read the stream into an array and updates the name if there is one (lastest self-ascribed) and places this in data within donecb
- app.js: the "pull.collect" results is the output of the above two steps
- app.js: is it possible to chain throughs? eg. getName and getBacklinks?
- last-days-block-responses need file which is a composite of lastDaysBlocks && lastDaysBlockResponses

# TODO:

-[x] get backLinked posts to block content post
  -[x] isolate functionality and check if backlinks works as expected
  -[x] set up specific server in new file
  -[x] set up function calling this library
-[x] print out the text of the backLinked post
-[x] publish key of block msg (which will act as dest id for backLinks)
-[ ] make the dest id of block dynamic based on lastDaysBlocks 
-[ ] only return posts about a block issued by the issuer of the block 
-[ ] get name of blocked person 
-[ ] remove date range



This is what a block looks like:


{
  "key": "%n2iq29AiNz7Z83i5VboY0izsoADQlYfbxBGrRcATGCg=.sha256",
  "value": {
    "previous": "%6oztTmfU/b0CD0kJLdvBgdmA4HGknld+tpTkFnkJLSo=.sha256",
    "author": "@NeB4q4Hy9IiMxs5L08oevEhivxW+/aDu/s/0SkNayi0=.ed25519",
    "sequence": 14097,
    "timestamp": 1540632298145,
    "hash": "sha256",
    "content": {
      "type": "contact",
      "contact": "@mBa3agSCTedAB8Cc9L/tVZlnqOKylm0TIBRH43wsT6s=.ed25519",
      "blocking": true
    },
    "signature": "B9HrAu0/hBA/i/wwbtLQjWT03voJlyDFcyEim8mvfrbcRnj4mxugdUJr68y3P/Zyy/EjebcK9BEILHfhw4wJAA==.sig.ed25519"
  }
}


This is what a comment on a block looks like:

{
  "key": "%a1Ep5gOB2Y68B5hEAmVcZDffPgDjSrVIWRigGDSTGy4=.sha256",
  "value": {
    "previous": "%n2iq29AiNz7Z83i5VboY0izsoADQlYfbxBGrRcATGCg=.sha256",
    "author": "@NeB4q4Hy9IiMxs5L08oevEhivxW+/aDu/s/0SkNayi0=.ed25519",
    "sequence": 14098,
    "timestamp": 1540632440329,
    "hash": "sha256",
    "content": {
      "type": "post",
      "root": "%n2iq29AiNz7Z83i5VboY0izsoADQlYfbxBGrRcATGCg=.sha256",
      "branch": "%n2iq29AiNz7Z83i5VboY0izsoADQlYfbxBGrRcATGCg=.sha256",
      "text": "I am currently making a set of features which will allow people to find block messages and then any posts which point at the block. \n\nYou can read more about that here: %omAobSsBTkmUPdtPzFWUcyO+oHS1jBbwTHp3Bmvl1U0=.sha256\n\nI am blocking and unblocking an old account of mine to have a recent ref to test against.",
      "mentions": [
        {
          "link": "%omAobSsBTkmUPdtPzFWUcyO+oHS1jBbwTHp3Bmvl1U0=.sha256"
        }
      ]
    },
    "signature": "pEM7f45rTVO+ScT/mr+zq3PiUoGhzpYrmUIyif5fVvaP9Y0ZrpBI4HgqYGkskYv+g/fwWUF7cU1OUVbusy04CQ==.sig.ed25519"
  }
}
