function UsaObjeto () {
  this.save = () => console.log('Usando save do objeto')
}

var objs = []

console.time('Usando objetos locais')
for (let i=0; i<2000000; i++) {
  objs.push(new UsaObjeto())
}
console.timeEnd('Usando objetos locais')

function UsaProto () {}
UsaProto.prototype.save = () => console.log('Usando save do Prototype')

var objs = []

let t1 = console.time('Usando prototype')
for (let i=0; i<2000000; i++) {
  objs.push(new UsaProto())
}
console.timeEnd('Usando prototype')

