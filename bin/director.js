const Tips = require('../model/tips')
const Progress = require('../model/progress')
const Ip = require('../model/ip')
const Dir = require('../model/dir')
const Sleep = require('../util/sleep')
const lodash = require('lodash')
const Word = require('../util/randomWord')
const colors = require('colors')

class Director {
  
  constructor(){
    this.tips = new Tips()
    this.progress = new Progress()
    this.ip = new Ip()
    this.dir = new Dir()
    this.word = new Word()
  }
  
  async loading(){
    console.log('loading model ...')
    await this.progress.normalPress(lodash.random(800, 2000), 'Waiting: ', '0')
  }
  
  runTips(){
    console.log(this.tips.getGen())
  }
  
  async runIp(){
    this.runTips()
    let runCC = lodash.random(2, 4)
    
    await this.loading()
    
    for(var j=0; j<runCC; j++){
      let forCC = lodash.random(80, 300)
  
      for(var i=0; i<forCC; i++){
        let nowIp = await this.ip.genIpAddress('Checking: '+this.word.wordGen(1) + ': ')
        console.log(nowIp)
        await Sleep(lodash.random(10, 60))
      }
      console.log('Saving ...')
      await this.progress.normalPress(lodash.random(500, 2000), 'Saving: ', '0')
    }

  }
  
  async runDir(){
    this.runTips()
    await this.loading()
    
    let dirs = this.dir.genter()
    let once = 0
    for(var j=0; j<dirs.length; j++){
  
      console.log('Scanning '+ (Math.random() > 0.94 ? dirs[j].red : dirs[j].gray))
      await Sleep(lodash.random(10, 40))
      
      if(once >= 50){
        await this.progress.normalPress(lodash.random(800, 2000), 'Analyzing: ', '0')
        once = 0
      }else{
        once++
      }
      
    }
  }
  
  
  async doit(){
    await this.runIp()
    await this.runDir()
  }
  
}


new Director().doit()