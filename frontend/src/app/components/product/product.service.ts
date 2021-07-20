import { Injectable } from '@angular/core';
//Importando snack-bar:
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //Injetando snack-bar no construtor:
  constructor(private snackBar: MatSnackBar) { }

  //Método que utilizará o snack-bar para mostrar uma mensagem na page quando clicar no botão 'Salvar':
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
}
