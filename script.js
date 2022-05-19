class ContaBancaria {
	constructor(agencia, numero, tipo, pix) {
		this.agencia = agencia;
		this.numero = numero;
		this.tipo = tipo;
		this._saldo = 0;
        this._pix = 0;
	}

	sacar(valor) {
		if (valor > this._saldo) {
			return console.log('Saque negado; saldo insuficiente!');
		}

		this._saldo = this._saldo - valor;
		return this._saldo;
	}

	depositar(valor) {
		this._saldo = this._saldo + valor;
		return this._saldo;
	}

	set saldo(valor) {
		this._saldo = valor;
	}

	get saldo() {
		return this._saldo;
	}

    pixRetirar(valor) {
		
        if (valor > this._pix) {
			return console.log('Pix negado; saldo insuficiente!');
		}

		this._pix = this._pix - valor;
		return this._pix;
    }

    pixDeposito(valor) {
		this._pix = this._pix + valor;
		return this._pix;
	}

	set pix(valor) {
		this._pix = valor;
	}

	get pix() {
		return this._pix;
	}

}


class ContaCorrente extends ContaBancaria {
	constructor(agencia, numero, cartaoCredito) {
		super(agencia, numero);
		this.tipo = 'corrente';
		this._cartaoCredito = cartaoCredito;
	}

	set cartaoCredito(valor) {
		this._cartaoCredito = valor;
	}

	get cartaoCredito() {
		return this._cartaoCredito;
	}
}

class ContaPoupanca extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'poupança';
	}
}

class ContaUniversitaria extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'universitária';
	}

	sacar(valor) {
		if (valor > 2000) {
			return 'Operação negada.';
		}

		this._saldo = this._saldo - valor;
		return this._saldo;
	}
}

class ContaEmpresarial extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'empresarial';
	}
}

class ContaDigital extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'Digital';
	}

	pixRetirar(valor) {
		if (valor > 1000) {
			return 'Operação negada.';
		}

		this._pix = this._pix - valor;
		return this._pix;
	}
}