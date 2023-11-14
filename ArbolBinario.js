class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
}

class Busqueda {
    constructor() {
        this.Raiz = null;
    }

    agregar(valor) {
        this.Raiz = this.agregarN(this.Raiz, valor);
    }

    agregarN(Raiz, valor) {
        if (Raiz === null) {
            return new Nodo(valor);
        }
        if (valor < Raiz.valor) {
            Raiz.izquierda = this.agregarN(Raiz.izquierda, valor);
        } else if (valor > Raiz.valor) {
            Raiz.derecha = this.agregarN(Raiz.derecha, valor);
        }

        return Raiz;
    }

    imprimir() {
        this.imprimirOrd(this.Raiz);
    }

    imprimirOrd(Raiz) {
        if (Raiz !== null) {
            this.imprimirOrd(Raiz.izquierda);
            console.log(Raiz.valor);
            this.imprimirOrd(Raiz.derecha);
        }
    }
}

// Ejemplo de uso
const arb = new Busqueda();

arb.agregar(10);
arb.agregar(23);
arb.agregar(75);
arb.agregar(27);
arb.agregar(49);
arb.agregar(1);
arb.agregar(86);

arb.imprimir();