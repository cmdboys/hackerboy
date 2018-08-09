function Sleep(time) {
  return new Promise(resolve => {
   setTimeout(()=>{
     resolve()
   }, time)
  })
}

module.exports = Sleep