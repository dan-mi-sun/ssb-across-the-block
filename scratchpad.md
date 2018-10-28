# TODO:

- get backLinked posts to block content post
  - isolate functionality and check if backlinks works as expected
  - set up specific server in new file
  - set up function calling this library
- print out the text of the backLinked post
- get name of blocked person 
- remove date range



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
