import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  /* Criamos um produto somente para testar se estava tudo funcionando. Ao clicarmos em "Salvar" na nossa page, 
    nosso sistema exibiu a mensagem "Produto criado com sucesso!" e adicionou nosso produto de teste no db.json.
  product: Product = {
    name: 'Produto de teste',
    price: 125.98
  }
  */
  product: Product = {
    name: '',
    price: null
  }
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }

  //O método subscribe serve para que possamos ser notificados quando a resposta chegar.
  //Quando chegar a resposta, mostraremos a mensagem "Produto criado!".
  //Logo depois, navegaremos para /products.
  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['/products'])
    })

    
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
