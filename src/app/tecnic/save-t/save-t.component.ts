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
  frmTecnic: FormGroup;
  selectedFile: File | null = null;

  constructor(private formBuilder: FormBuilder, private sTecnic: TecnicService, private router: Router) {
    this.frmTecnic = this.formBuilder.group({
      tecTecnico: ['', Validators.required],
      firmaImagen: [null], // Inicializado a null para manejar la imagen
      actTecnico: ['Activo']
    });
  }

  saveTecnic() {
    if (this.frmTecnic.valid) {
      const formData = new FormData();
      formData.append('tecTecnico', this.frmTecnic.get('tecTecnico')!.value);
      formData.append('actTecnico', this.frmTecnic.get('actTecnico')!.value);

      if (this.selectedFile) {
        formData.append('firmaImagen', this.selectedFile);
      }

      this.sTecnic.saveTecnic(formData).subscribe(
        response => {
          this.frmTecnic.reset();
          this.router.navigate(['home/tecnico/list']);
        },
        error => {
          console.error('Error al guardar técnico:', error);
        }
      );
    } else {
      console.error('El formulario no es válido. Verifica los campos.');
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  exitList() {
    this.router.navigate(['home/tecnico/list']);
  }
}
