// Classe base
class Hero {
  constructor(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo) {
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "mago":
        ataque = "lançou magia";
        break;
      case "monge":
        ataque = "desferiu um golpe de artes marciais";
        break;
      case "ninja":
        ataque = "atacou com shuriken";
        break;
      default:
        ataque = "usou um ataque indefinido";
    }
    console.log(`${this.tipo} ${this.nome} ${ataque}!`);
  }
}

// Exemplos de objetos
const heroi1 = new Hero("Aragorn", "guerreiro");
const heroi2 = new Hero("Merlin", "mago");
const heroi3 = new Hero("Shaolin", "monge");
const heroi4 = new Hero("Hanzo", "ninja");

// Atacando!
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
