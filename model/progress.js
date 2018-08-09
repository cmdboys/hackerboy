/*
* 进度条模块，模拟进度条
* */

const log = require('single-line-log').stdout
require('colors')
const lodash = require('lodash')
const tween = require('../util/tween')


class Progress{
  constructor(){
    this.maxProgress = 60
    
    this.style = [
      ['░'.gray, '▒'.green],
      ['-'.gray, '+'.green],
      ['.'.gray, ':'.green],
      ['♡'.gray, '♥'.red]
    ]
  }
  
  getStyle(styleValue){
    return styleValue ? this.style[styleValue] : this.style[lodash.random(0, this.style.length-1)]
  }
  
  
  renderString(now, style){
    let str = ''
    lodash.each(lodash.range(this.maxProgress), (v, k)=>{
      if(k <= now){
        str += style[1]
      }else{
        str += style[0]
      }
    })
    return str
  }
  
  normalPress(doneTime, workName, styleValue){
    
    let style = this.getStyle(styleValue)
    return new Promise(resolve => {
      tween.tween(0, this.maxProgress, doneTime, tween.getRandomAni(), (target)=>{
        let nowIndex = Math.round(target)
        log( workName + this.renderString(nowIndex, style) + ' ' + (Math.ceil((target / this.maxProgress) * 100)) + '%')
      }, ()=>{
        log.clear();
        console.log('\n')
        resolve()
      })
    })
    
  }
  
  appendPress(doneTime, styleValue){
    let style = this.getStyle(styleValue)
  
    return new Promise(resolve => {
      tween.tween(0, this.maxProgress, doneTime, tween.getRandomAni(), (target)=>{
        let nowIndex = Math.round(target)
        console.log(this.renderString(nowIndex, style))
      }, ()=>{
        log.clear();
        console.log('\n')
        resolve()
      })
    })
    
  }
}

// normalPress
// appendPress


module.exports = Progress
