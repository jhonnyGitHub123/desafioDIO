class personagemJogo {
    constructor(nome, tipo, idade) {
        this.nome = nome
        this.tipo = tipo
        this.idade = idade

        console.log("O personagem "+ this.nome +" é do tipo "+this.tipo + " e tem "+this.idade+ " de idade.")
    }
     atacar(){
        if(this.tipo === "Mago"){
            console.log("O "+this.tipo + " atacou usando magia")
        }else if(this.tipo ==="Guerreiro"){
            console.log("O "+this.tipo + " atacou usando a espada")
        }else if(this.tipo ==="Monge"){
            console.log("O "+this.tipo + " atacou usando artes marciais")
        }else{
            console.log("O "+this.tipo + " atacou usando a suriken")
        }
    }

}

let personagem = new personagemJogo("Joao", "Monge", 23)

console.log(personagem.atacar())






