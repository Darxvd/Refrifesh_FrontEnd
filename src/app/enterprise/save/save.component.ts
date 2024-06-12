import { Component } from '@angular/core';
import { EnterpriseEntity } from '../model/enterprise-entity';
import { FormControl, FormGroup } from '@angular/forms';
import { EntepriseService } from '../service/enteprise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent {

  enterprise: EnterpriseEntity[]=[]

  fmrEnterprise = new FormGroup({
    idEmpresa: new FormControl(''),
    rucEmpresa: new FormControl(''),
    rzcEmpresa: new FormControl(''),
    ncoEmpresa: new FormControl(''),
    dirEmpresa: new FormControl(''),
    disEmpresa: new FormControl(''),
    actEmpresa: new FormControl('')
  })

  constructor(private sEnterprise: EntepriseService, private router: Router){}


  saveEnterprise(){
    this.sEnterprise.saveEnterprise(this.fmrEnterprise.value).subscribe(res=>{
      this.fmrEnterprise.reset();
      this.router.navigate(['home/empresa/list'])
    })
  }

  exitList(){
    this.router.navigate(['home/empresa/list'])
  }

}
