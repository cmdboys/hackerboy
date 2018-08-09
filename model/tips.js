/*
* 每个命令开始前的指令
*
* */

const RandomSentence = require('../util/randomSentence')

class Tips{
 constructor(){
  this.randomSentence = new RandomSentence()
 }
 
 getGen(){
  return this.randomSentence.wordGen() + '...'
 }
}

module.exports = Tips