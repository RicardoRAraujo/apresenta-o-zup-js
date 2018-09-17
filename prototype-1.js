function Impressora () {}
Impressora.prototype.print = () => console.log('Chamando o método imprimir do prototype')

let obj = new Impressora()
obj.print() // Chamando o método imprimir do prototype