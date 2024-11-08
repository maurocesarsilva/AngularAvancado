import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, subscribeOn } from 'rxjs';

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

  // minhaPromisse(nome: string): Promise<string> {
  //   return new Promise((resolve, reject) => {

  //     if (nome === "mauro") {
  //       setTimeout(() => {
  //         resolve("Seja bem vindo " + nome)
  //       }, 1000);
  //     } else {
  //       reject("Ops! Você não é mauro")
  //     }
  //   });
  // }


  minhaObservable(nome: string): Observable<string> {
    return new Observable(subscriber => {
      if (nome === "mauro") {
        subscriber.next('Olá!');

        setTimeout(() => {
          subscriber.next('resposta com delay!');
          subscriber.complete();

        }, 3000);

      } else {
        subscriber.error("Ops! deu erro!")
        subscriber.complete();
      }
    });
  }

  // ngOnInit é o primeiro metodo chamado apos o contrutor
  ngOnInit(): void {

    // sucesso
    //this.minhaPromisse("mauro").then(result => console.log(result));

    //com tratativa de erro
    // this.minhaPromisse("nomeErrado")
    //   .then(result => console.log(result))
    //   .catch(error => console.log(error));

    // this.minhaObservable('mauro').subscribe({
    //   next: result => console.log(result),
    //   error: error => console.log(error),
    //   complete: () => console.log('Completed')
    // });

    // next, error, complete precisa seguir os nomes corretos
    const observer = {
      next: (valor: any) => console.log("next " + valor),
      error: (error: any) => console.log("error " + error),
      complete: () => console.log('Completed')
    };
    
    this.minhaObservable('maurok').subscribe(observer);
  }
}
