import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  //Array para os produtos que receberemos do backend:
  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price'];

  //Inicializando o construtor com um productService que contém nosso método read():
  constructor(private productService: ProductService) { }

  //Método para carregar os produtos:
  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }

}
