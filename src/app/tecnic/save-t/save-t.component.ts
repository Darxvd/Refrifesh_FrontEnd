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
    tecTecnico: new FormControl('', Validators.required),
    actTecnico: new FormControl('')
  });
  selectedFile: File | null = null;

  constructor(private sTecnic: TecnicService, private router: Router) { }

  ngOnInit(): void { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  saveTecnic() {
    const tecTecnico = this.frmTecnic.get('tecTecnico');
    if (tecTecnico && tecTecnico.value) {
      const formData = new FormData();
      formData.append('tecTecnico', tecTecnico.value);
      formData.append('actTecnico', 'Activo'); 
      if (this.selectedFile) {
        formData.append('firmaImagen', this.selectedFile);
      }
    
      this.sTecnic.saveTecnic(formData).subscribe(res => {
        this.frmTecnic.reset();
        this.router.navigate(['home/tecnico/list']);
      });
    } else {
      console.error('El campo nombreCompleto es nulo o está vacío.');
    }
  }
  
  

  exitList() {
    this.router.navigate(['home/tecnico/list']);
  }
}
