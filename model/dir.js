
/*
* 随机目录打印
* */

const lodash = require('lodash')
const randomWord = require('../util/randomWord')
const path = require('path')


class Dir{
  constructor(){
    this.myWord = new randomWord()
    this.outputDir = []
    
    this.baseUrl = [
      'C:/',
      'E:/',
      'D:/',
      'F:/',
      '/var/',
      '/root/www'
    ]
    
    this.sub = [
      'exe',
      'text',
      'txt',
      'html',
      'md',
      'js',
      'java',
      'rb',
      'py',
      'h',
      'cpp',
      'cs',
      'dart',
      'go',
      'php',
      'xml',
      'jpg',
      'png',
      'gif',
      'link',
      'rtx',
      'conf',
      'download'
    ]
    
    this.nowbase = this.baseUrl[lodash.random(0, this.baseUrl.length - 1)]
    
    this.maxDin = 40
    this.minDin = 10
    this.deepDin = 6 // 最多6层目录
    
  }
  

  genter(){
    this.outputDir = []
    // 首先生成一个完整目录
    let fullDir = this.myWord.wordGen(this.deepDin)
    
    // 然后循环目录放置文件
    
    lodash.each(fullDir, (val1, index1)=>{
  
      
      let str = ''
      for(var i=0; i<fullDir.length-index1; i++){
        str += fullDir[i] + '/'
      }
      
      var gg = str
      lodash.each(lodash.range(lodash.random(this.minDin, this.maxDin)), ()=>{
        // 在当前目录随机建文件或者文件
        if(Math.random() >= 0.4){
          // 文件
          gg +=  this.myWord.wordGen(1) + '.' + this.sub[lodash.random(0, this.sub.length - 1)]
        }else{
          gg += this.myWord.wordGen(1) + '/'
        }
  
        this.outputDir.push(gg)
        gg = str;
      })
      this.outputDir.push(str)
    
    })
    
  
    
    lodash.each(this.outputDir, (v, k)=>{
      this.outputDir[k] = this.nowbase  + this.outputDir[k]
    })
    
  
    return this.outputDir.reverse()
    
    
  }
}

// let dir = new Dir().genter()

module.exports = Dir