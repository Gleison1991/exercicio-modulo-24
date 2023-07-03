const funcionario1 = new Funcionario("Maria", "dev front-end", 5000);
const funcionario2 = new Estagiario("Pedro");
const funcionario3 = new Gerente("Paula");
const carroDaMaria2 = new Carro("Fiesta", "Ford", 2020, 2019);
const carroDoPedro2 = new Carro("A4", "audi", 2018, 2016);
const celularDaPaula2 = new Celular("Samsung Galaxy S22", "Samsung", 3.500);

function Celular(modelo, fabricante, valor) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.valor = valor;
    this.ligar = function() {
        console.log("ligando");
    }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log("acelerar");
    }
}

function Pessoa(nome) {
    this.nome = nome;
        console.log(this.nome + "diz olá");
    }

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    let _salario = salario;

    this.getSalario = function() {
        return _salario;
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.aumento = function() {
        const novoSalario = salario + 400;
        _salario = novoSalario;
    }
    
    this.dizCargo = function() {
        console.log(this.cargo);
    }

    Pessoa.call(this, nome);
}

function Estagiario(nome) {
    Funcionario.call(this, nome, "Estagiario", 2000);

    this.aumento = function() {
        const novoSalario = this.getSalario() + 500;
        this.setSalario(novoSalario);
    }
}

function Gerente(nome) {
    Funcionario.call(this, nome, "Gerente", 10000);

    this.aumento = function() {
        const novoSalario = this.getSalario() + 1000;
        this.setSalario(novoSalario);
    }
}


const celularDaPaula = {
    modelo: 'Samsung Galaxy S22',
    fabricante: 'Sansung',
    valor: 3.500,
    ligar: function() {
        console.log("ligando");
    }
}

const carroDaMaria = {
    modelo: 'Fiesta',
    fabricante: 'Ford',
    anoModelo:2020,
    anoFabricacao:2019,
    acelerar: function() {
        console.log("acelerando");
    }
} 

const carroDoPedro = {
    modelo: 'A4',
    fabricante: 'audi',
    anoModelo:2018,
    anoFabricacao:2016,
    acelerar: function() {
        console.log("acelera");
    }
} 

console.log(carroDaMaria2);
console.log(carroDoPedro2);
console.log(celularDaPaula2);

funcionario1.aumento();
console.log(funcionario1.getSalario())

funcionario2.aumento();
console.log(funcionario2.getSalario())

funcionario3.aumento();
console.log(funcionario3.getSalario())