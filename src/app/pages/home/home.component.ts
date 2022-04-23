import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  template: `
    Hola desde <app-onchanges [nombre]="nombre"></app-onchanges>!

    <button
      class="p-5 bg-green-700 rounded-lg text-white block m-2"
      (click)="cambiarNombre()"
    >
      Cambiar nombre
    </button>
  `,
})
export class HomeComponent
  implements OnInit, AfterContentInit, AfterViewInit, OnDestroy
{
  nombre = 'HomeComponent';
  interval$: any;
  count = 0;

  constructor() {
    console.log('HomeComponent constructor');
    this.interval$ = setInterval(() => {
      this.count++;
      console.log('HomeComponent constructor interval', this.count);
    }, 10000);
  }

  ngOnInit(): void {
    console.log('HomeComponent ngOnInit');
  }

  ngAfterContentInit(): void {
    console.log('HomeComponent ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log('HomeComponent ngAfterViewInit');
  }

  ngOnDestroy(): void {
    console.log('HomeComponent ngOnDestroy');

    clearInterval(this.interval$);
  }

  cambiarNombre() {
    console.log('HomeComponent cambiarNombre()');
    this.nombre = 'Nuevo nombre';
  }
}
