import { Component, OnInit } from '@angular/core';
//Importanto o router para podermos linkar o botão a tela.
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  //Esperamos receber uma rota via construtor (o próprip Angular fará essa injeção para nós).
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //Método para redirecionar o botão para a pagina 'create'.
  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }
}
