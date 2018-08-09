let randomIp = require('random-ipv4')
let ipSearch = require('lib-qqwry')
const colors = require('colors')

class Ip{

  constructor(){
    this.qqwry = ipSearch.init()
  }
  
  genIpAddress(subString){
    let ip = randomIp()
    let res = this.qqwry.searchIP(ip)
    return subString + ' ' + ip.yellow + ' -> '.gray + res.Country.green + ' -> '.gray + res.Area.underline
  }

}


// let res = new Ip().genIpAddress('Checking ...')
//
// console.log(res)

module.exports = Ip