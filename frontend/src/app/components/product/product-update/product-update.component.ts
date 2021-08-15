import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product!: Product;

  constructor(private productService: ProductService, 
              private router: Router, 
              private route: ActivatedRoute
  ) { }

  /*Para o formulário já vir preenchido definimos o método
  ngOnInit() desta forma:*/
  ngOnInit(): void {
    //pegando o parâmetro que veio dentro de um 'mapa de parâmetros:'
    const id = this.route.snapshot.paramMap.get('id')

    /*para nosso readById(id) aceitar o id, tivemos que fazer
    uma alteração no arquivo tsconfig.json: "strict": false*/
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado com sucesso!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
