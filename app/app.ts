import { NegociaoController } from "./controllers/negociacao-controller.js";
import { NegociacoesView } from "./views/negociacoes-view.js";

const controller = new NegociaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event=>{
    event.preventDefault();
    controller.adiciona();
});

