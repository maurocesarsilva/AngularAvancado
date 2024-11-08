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


  userObservable(nome: string, email: string): Observable<Usuario> {
    return new Observable(subscriber => {
      if (nome === "Admin") {
        let user = new Usuario(nome, email);

        setTimeout(() => {
          subscriber.next(user);
        }, 1000);

        setTimeout(() => {
          subscriber.next(user);
        }, 2000);

        setTimeout(() => {
          subscriber.next(user);
        }, 3000);

        setTimeout(() => {
          subscriber.next(user);
        }, 4000);

        setTimeout(() => {
          subscriber.complete();
        }, 5000);

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
      next: (valor: any) => console.log("next " + valor.nome + " " + valor.email),
      error: (error: any) => console.log("error " + error),
      complete: () => console.log('Completed')
    };


    const obs = this.userObservable("Admin", "email");
    const sub = obs.subscribe(observer);

    setTimeout(() => {
      sub.unsubscribe();
    }, 3500);


    // this.minhaObservable('maurok').subscribe(observer);
  }
}

export class Usuario {

  constructor(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
  }
  nome: string;
  email: string;
}
