
  //equivalente a Enum
  // talvez poderia montar dicionario associando tipo a seu ataque? 
  // parece gerar mais trabalho do que ajuda
const Tipos = Object.freeze({
  MAGO: 'mago',
  GUERREIRO: 'guerreiro',
  MONGE: 'monge',
  NINJA: 'ninja'
});


class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    ataque(){
        switch(this.tipo){
            case Tipos.MAGO:
            console.log(`o ${this.tipo} atacou usando magia`)
            break
            case Tipos.GUERREIRO:
            console.log(`o ${this.tipo} atacou usando espada`)
            break
            case Tipos.MONGE:
            console.log(`o ${this.tipo} atacou usando artes marciais`)
            break
            case Tipos.NINJA:
            console.log(`o ${this.tipo} atacou usando shuriken`)
            break
            default:
            console.log(`o aldeão atacou usando vareta`)    
            break;
        }
        
    }
}

let hero1 = new heroi("Juanito da Pedra Leve", 300, Tipos.GUERREIRO)
hero1.ataque()