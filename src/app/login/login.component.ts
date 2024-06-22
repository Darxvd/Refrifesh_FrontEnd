import { Component, ViewChild } from '@angular/core';
import { LoginEntity } from './model/user-entity';
import { Router } from '@angular/router';
import { UserService } from './service/user.service';
import { HeaderComponent } from '../header/header.component';
import { UserDEntity } from './model/user-entity-ts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: UserDEntity = new UserDEntity();
  errorMessage: string = '';

  constructor(private router: Router, private loginService: UserService) { }

  onSubmit() {
    this.loginService.login(this.user).subscribe(
      (response: UserDEntity) => {
        this.loginService.setLoggedInUser(response);
        this.router.navigate(['home']);
      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
        this.errorMessage = 'Usuario o contraseña incorrectos';
      }
    );
  }
}
