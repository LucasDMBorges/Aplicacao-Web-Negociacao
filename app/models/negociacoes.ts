import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao>= [];

    adiciona(negociao: Negociacao) {
        this.negociacoes.push(negociao);

    }

    lista(): ReadonlyArray<Negociacao>{
        return this.negociacoes;
    }
}