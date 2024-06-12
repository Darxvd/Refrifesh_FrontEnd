import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginEntity } from '../login/model/user-entity';
import { PersonEntity } from '../person/model/person-entity';
import { UserDEntity } from '../login/model/user-entity-ts';
import { UserService } from '../login/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
  person: UserDEntity[] = [];

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
  }

  cerrarSesion() {
    this.router.navigate(['/login']);
  }
}
