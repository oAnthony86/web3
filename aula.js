function Pessoa(pNome, pSobrenome, pIdade){
    this.primeiroNome = pNome;
    this.segundoNome = pSobrenome;
    this.idade = pIdade;

    this.nomeCompleto = function(){
        return this.primeiroNome + " " + this.segundoNome;
    }

    this.salvar = function(){
        localStorage.setItem("nome",this.primeiroNome);
    }
    this.recuperar = function(){
        console.log(localStorage.getItem("nome"));
    }
}

const pessoa = new Pessoa("Leonard","Kawhi","29");
const nomeCompleto = pessoa.nomeCompleto();
const container = document.getElementById("container");
container.innerHTML = nomeCompleto;
