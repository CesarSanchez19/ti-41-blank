import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss'],
  standalone: false,
  // siempres se declara false
})
export class CalcComponent  implements OnInit {

  // Declaramos un input dentro de complement "calc" para recibir datos de entrada 'string'
  @Input() title: string = '';

   // Declaramos un output dentro de complement "calc", un disparo de evento de salidad
  @Output() dispatchEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  // Se declara la funcion del componente 'calc/html'
  returnInfo(){
    this.dispatchEvent.emit('Hello from child: 👌👌👌👌')
    return;
  }

}
