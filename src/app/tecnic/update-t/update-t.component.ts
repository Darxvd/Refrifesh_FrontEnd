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
  frmTecnic: FormGroup;
  
  selectedFile: File | null = null;

  constructor(private router: Router, private sTecnic: TecnicService, private formBuilder: FormBuilder) {
    this.frmTecnic = this.formBuilder.group({
      tecTecnico: ['']
    });
  }

  ngOnInit(): void {
    this.getDataTecnic();
  }

  getDataTecnic() {
    this.sTecnic.getIdTecnic().subscribe(data => {
      this.tecnic = data;
      this.frmTecnic.patchValue({
        tecTecnico: this.tecnic.tecTecnico
      });
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  updateTecnic() {
    this.tecnic.idTecnico = this.frmTecnic.value.idTecnico;

    this.sTecnic.updateTecnic(this.tecnic.idTecnico, this.tecnic).subscribe(data => {
      this.frmTecnic.reset();
      this.router.navigate(['home/tecnico/list']);
    });
  }

  exitList() {
    this.router.navigate(['home/tecnico/list']);
  }

}
