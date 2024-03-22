import { Component } from '@angular/core';
import { TecnicEntity } from '../model/tecnic-entity';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TecnicService } from '../service/tecnic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-save-t',
  templateUrl: './save-t.component.html',
  styleUrls: ['./save-t.component.css']
})
export class SaveTComponent {

  frmTecnic = new FormGroup({
    idTecnico: new FormControl(''),
    tecTecnico: new FormControl(''),
    actTecnico: new FormControl('')
  })

  constructor(private sTecnic: TecnicService, private router: Router) { }

  ngOnInit(): void {
  }

  saveTecnic(){
    this.sTecnic.saveTecnic(this.frmTecnic.value).subscribe(res=>{
      this.frmTecnic.reset();
      this.router.navigate(['tecnico/list'])
    })
  }

  
  exitList() {
    this.router.navigate(['tecnico/list']);
  }
}
