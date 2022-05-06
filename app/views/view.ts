export abstract class View<T> {
    protected element : HTMLElement;
    constructor(selector: string){
        const element = document.querySelector(selector);
        if (element){
            this.element = element as HTMLElement;
        }else {
            throw Error(`Seletor ${selector} não existe no DOM veirifique com o Desenvolvedor`)
        }        
    }
    update(model: T): void {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
    abstract template(model: T): string;
}