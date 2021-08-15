import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//Importando snack-bar:
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  //Url base dos nossos produtos (comunicação com nosso backend)
  baseUrl = "http://localhost:3001/products"

  //Injetando snack-bar no construtor:
  constructor(private snackBar: MatSnackBar, private http:HttpClient) { }

  //Método que utilizará o snack-bar para mostrar uma mensagem na page quando clicar no botão 'Salvar':
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  /* - Observable é um padrão baseado em eventos 
  (quando ocorrer um evento, algum trecho de código é chamado de forma reativa).*/
  //Método para criar um produto através de uma requisição.
  //Retornaremos um Observable de Product.
  create(product: Product): Observable<Product> {
    //Garantimos que nosso método retornará um Observable de Product utilizando <Product>.
    return this.http.post<Product>(this.baseUrl, product);
  }

  //Retornaremos um Observable de um array de Product.
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}` 
    return this.http.get<Product>(url)
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }
}
