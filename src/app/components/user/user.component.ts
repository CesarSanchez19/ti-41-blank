import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  standalone: false,
})
export class UserComponent  implements OnInit {

  public title: string = 'User Component';
  // Declaramos el dato de entrada de tipo string
  public calcTitle: string = 'Calc component'
  public isAdmin: boolean = false;
  public isAlertOpen: boolean = false;
  public alertButtons: string[] = ['Yes','No'];
  public alertMessage: string = '';
  public amount: number = 123456;
  public todayIs: Date = new Date();

  constructor() { }

  color = '';

  ngOnInit () {}

  toggleAdmin() {
    this.isAdmin = !this.isAdmin;
  }

  handleEvent(event: string) {
    this.alertMessage = event;
    this.isAlertOpen = !this.isAlertOpen;
    alert(event);
  }

}
