import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

//Criando nossa diretiva 'myForEm':
@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  //Recebendo um array de números:
  @Input("myForEm") numbers: number[] = [];

  //Inicializando o construtor:
  constructor(
    private container: ViewContainerRef, 
    private template: TemplateRef<any>
  ) {}

  //Lógica:
  ngOnInit(): void {
    //Estamos criando com container (this.container) para cada repetição (número) do laço.
    //O template será o 'li' que criamos (this.template)
    /*Dentro do contesto 'li', queremos que exista um valor implícito.
      Se não colocarmos o '$implicit: number', os valores não aparecerão.*/
    for(let number of this.numbers){
      this.container.createEmbeddedView(this.template, { $implicit: number })
    }    
    console.log(this.numbers);
  }
}
