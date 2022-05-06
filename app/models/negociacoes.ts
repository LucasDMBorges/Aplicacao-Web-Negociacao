import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao>= [];

    public adiciona(negociao: Negociacao) {
        this.negociacoes.push(negociao);

    }

    public lista(): ReadonlyArray<Negociacao>{
        return this.negociacoes;
    }
}