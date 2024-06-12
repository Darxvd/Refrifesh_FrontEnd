import { Component, OnInit } from '@angular/core';
import { TecnicEntity } from '../model/tecnic-entity';
import { TecnicService } from '../service/tecnic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-t',
  templateUrl: './list-t.component.html',
  styleUrls: ['./list-t.component.css']
})
export class ListTComponent implements OnInit {

  tecnic: TecnicEntity[] = [];

  constructor(private sTecnic: TecnicService, private router: Router) { }

  ngOnInit(): void {
    this.getTecnicActive();
  }

  getId(id: number) {
    this.sTecnic.id = id;
    this.router.navigate(['/tecnico/update']);
  }

  getTecnicActive() {
    this.sTecnic.getTecnicActive().subscribe(tecnic => {
      this.tecnic = tecnic;
    });
  }

  deleteSoftTecnic(id: number) {
    this.sTecnic.deleteSoftTecnic(id).subscribe(tecnic => {
      this.getTecnicActive();
    });
  }
}
