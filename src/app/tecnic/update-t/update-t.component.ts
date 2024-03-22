import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TecnicService } from '../service/tecnic.service';
import { TecnicEntity } from '../model/tecnic-entity';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-t',
  templateUrl: './update-t.component.html',
  styleUrls: ['./update-t.component.css']
})
export class UpdateTComponent implements OnInit{

  tecnic: TecnicEntity = new TecnicEntity();

  frmTecnic = new FormGroup({
    idTecnico: new FormControl(''),
    tecTecnico: new FormControl(''),
    actTecnico: new FormControl('')
  })

  constructor(private router: Router, private sTecnic: TecnicService, private formBuilder: FormBuilder) {  }

  ngOnInit(): void {
    this.getDataTecnic();
  }

  getDataTecnic(){
    this.sTecnic.getIdTecnic().subscribe(data=>{
      this.tecnic = data;
      this.frmTecnic.patchValue({
        idTecnico: this.tecnic.idTecnico.toString(),
        tecTecnico: this.tecnic.tecTecnico
      })
    })
  }


  updateTecnic() {
    this.sTecnic.updateTecnic(this.tecnic.idTecnico, this.frmTecnic.value).subscribe(data=>{
      this.frmTecnic.reset();
      this.router.navigate(['tecnico/list']);
    })
  }
  
  
  
  exitList() {
    this.router.navigate(['tecnico/list']);
  }

}
