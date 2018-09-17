var num = 1
console.log(num) //=> 1

if (true) {
  (function(){
    var num = 2
    console.log(num) //=> 2
  })()
}

console.log(num) //=> 1