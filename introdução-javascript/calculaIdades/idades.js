function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Bruno',
	idade: 20,
};

const pessoa2 = {
	nome: 'Vitor',
	idade: 25,
};

const pessoa3 = {
	nome: 'Leonardo',
	idade: 19,
};

const animal = {
    nome: 'Mauí',
    idade: '17',
    raça: 'Véia'
} 
console.log(calculaIdade.call(pessoa3, 40));
console.log(calculaIdade.apply(pessoa2, [24]));
console.log(calculaIdade.call(animal, 2));