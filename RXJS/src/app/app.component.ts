import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  title = 'RXJS';

  minhaPromisse(nome: string): Promise<string> {
    return new Promise((resolve, reject) => {

      if (nome === "mauro") {
        setTimeout(() => {
          resolve("Seja bem vindo " + nome)
        }, 1000);
      } else {
        reject("Ops! Você não é mauro")
      }
    });
  }

  // ngOnInit é o primeiro metodo chamado apos o contrutor
  ngOnInit(): void {

    // sucesso
    //this.minhaPromisse("mauro").then(result => console.log(result));

    this.minhaPromisse("nomeErrado")
      .then(result => console.log(result))
      .catch(error => console.log(error));
  }
}
