import { Component } from '@angular/core';
import { EnterpriseEntity } from '../model/enterprise-entity';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EntepriseService } from '../service/enteprise.service';
import { Router } from '@angular/router';
import { EnterpriseDTO } from '../model/enterprise-dto';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent {

  enterprise: EnterpriseEntity[] = [];
  ruc = new FormControl('', [Validators.required]);
  error!: string;

  fmrEnterprise = new FormGroup({
    idEmpresa: new FormControl(''),
    rucEmpresa: new FormControl(''),
    rzcEmpresa: new FormControl(''),
    dirEmpresa: new FormControl(''),
    disEmpresa: new FormControl('')
  });

  constructor(private sEnterprise: EntepriseService, private router: Router) { }

  saveEnterprise() {
    this.sEnterprise.saveEnterprise(this.fmrEnterprise.getRawValue()).subscribe(res => {
      this.fmrEnterprise.reset();
      this.router.navigate(['home/empresa/list']);
    });
  }

  buscarEmpresa(): void {
    const rucValue = this.ruc.value;
    if (rucValue) {
      this.sEnterprise.getDescription(rucValue).subscribe({
        next: (data: EnterpriseDTO) => {
          this.fmrEnterprise.patchValue({
            rucEmpresa: data.numeroDocumento,
            rzcEmpresa: data.razonSocial,
            dirEmpresa: data.direccion,
            disEmpresa: data.distrito
          });
          this.error = '';
        },
        error: err => {
          this.error = 'No se pudo obtener los datos de la empresa';
          this.fmrEnterprise.reset();
        }
      });
    } else {
      this.error = 'Por favor, ingrese un RUC válido';
    }
  }

  isFormValid(): boolean {
    return this.fmrEnterprise.valid && !!this.fmrEnterprise.get('rucEmpresa')?.value;
  }
  

  exitList() {
    this.router.navigate(['home/empresa/list']);
  }
}
