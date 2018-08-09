// 进度条测试
const Progress = require('../model/progress')
let myPress = new Progress()

const lodash = require('lodash')

async function test1(){
  await myPress.normalPress(10000, 'do some ping: ')
  console.log('\nendxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
}

async function test2(){
  await myPress.appendPress(200)
  console.log('\nendxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
}

test1()