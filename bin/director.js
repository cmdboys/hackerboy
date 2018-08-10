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
  
  
  async loadingWork2(){
    await this.progress.normalPress(lodash.random(1600, 6000), 'Waiting: ')
  }
  
  runTips(){
    console.log(this.tips.getGen())
  }
  
  async runIp(){
    console.log('Check out the ip for the program.')
    this.runTips()
    let runCC = lodash.random(2, 4)
    
    await this.loading()
    
    for(var j=0; j<runCC; j++){
      let forCC = lodash.random(40, 120)
  
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
    console.log('Extract the compiled file.')
    this.runTips()
    await this.loading()
    
    
    let dirRuns = lodash.random(5, 12)
    
    for(var g=0; g<dirRuns; g++){
      let dirs = this.dir.genter()
      for(var j=0; j<dirs.length; j++){
        console.log('Unzip '+ (Math.random() > 0.94 ? dirs[j].red : dirs[j].gray))
        await Sleep(lodash.random(10, 40))
      }
      await this.progress.normalPress(lodash.random(800, 9000), 'Compiled: ', '0')
    }
    
    
  }
  
  async runInstall(){
    console.log('Installing ' + (this.word.wordGen(1)) + ' V'+lodash.random(0, 10) + '.' + lodash.random(0, 10) + '.' + lodash.random(0, 10))
    console.log('Please wait... '.gray)
    await this.loadingWork2()
  }
  
  
  async showTable(){
    console.log('Analyzing...')
    await this.progress.appendPress(lodash.random(100, 6000))
  }
  
  
  async doit(){
    await this.runInstall()
    await this.showTable()
    await this.runDir()
    await this.showTable()
    await this.runIp()
    await this.showTable()
  
    await this.doit();
  }
  
}


module.exports = Director