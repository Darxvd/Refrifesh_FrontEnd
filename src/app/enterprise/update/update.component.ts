import { Component, OnInit } from '@angular/core';
import { EnterpriseEntity } from '../model/enterprise-entity';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EntepriseService } from '../service/enteprise.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  enterprise: EnterpriseEntity = new EnterpriseEntity();

  fmrEnterprise = new FormGroup({
    idEmpresa: new FormControl(''),
    rucEmpresa: new FormControl(''),
    rzcEmpresa: new FormControl(''),
    dirEmpresa: new FormControl(''),
    disEmpresa: new FormControl('')
  })

  constructor(private router: Router, private sEnterprise: EntepriseService){}

  ngOnInit(): void {
    this.getDataEnterprise();
  }

  getDataEnterprise(){
    this.sEnterprise.getIdEnterprise().subscribe(data=>{
      this.enterprise = data;
      this.fmrEnterprise.patchValue({
        idEmpresa: this.enterprise.idEmpresa.toString(),
        rucEmpresa: this.enterprise.rucEmpresa,
        rzcEmpresa: this.enterprise.rzcEmpresa,
        dirEmpresa: this.enterprise.dirEmpresa,
        disEmpresa: this.enterprise.disEmpresa
      })
    })
  }

  updateEnterprise(){
    this.sEnterprise.updateEnterprise(this.enterprise.idEmpresa, this.fmrEnterprise.value).subscribe(data=>{
      this.fmrEnterprise.reset();
      this.router.navigate(['home/empresa/list']);
    });
  }

  exitList(){
    this.router.navigate(['home/empresa/list'])
  }

  
}
