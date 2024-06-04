class Pessoa {
    constructor(nome, sobrenome) {
      this._nome = nome;
      this._sobrenome = sobrenome;
    }
  
    // O metodo GET e usado para definir uma funcao quando uma propriedade especifica do objeto
    // for acessada. Nao aceita parametros e deve retornar um valor '
    get nomeCompleto() {
      return `${this._nome} ${this._sobrenome}`;
    }
  
    // O metodo SET e usado para definir uma funcao quando uma propriedade especifica do objeto
    // for modificada. Ele aceita um parametro que sera o novo valor atribuido a propriedade 
    set nomeCompleto(novoNomeCompleto) {
      const partes = novoNomeCompleto.split(' ');
      this._nome = partes[0];
      this._sobrenome = partes[1] || '';
    }
  }
  
  const pessoa = new Pessoa('João', 'Silva');
  pessoa.nomeCompleto = 'Carlos Souza' // sintaxe mais simples, sem a necessidade de usar o "()" para definir uma funcao
  console.log(pessoa.nomeCompleto); // Saída: Carlos Souza
  console.log(pessoa._nome); // Saída: Carlos
  console.log(pessoa._sobrenome); // Saída: Souza
  