import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false,
})
export class LoginComponent  implements OnInit {

  constructor(private router: Router) { }

  public user = new FormControl('');
  public password = new FormControl('');
  ngOnInit() {}

  login () {
    console.log('User: ', this.user.value );
    console.log('Password: ', this.password.value)
    return;
    this.router.navigate(['/home'])
  }
}
