import { Component, OnInit } from '@angular/core';
import { EnterpriseEntity } from '../model/enterprise-entity';
import { EntepriseService } from '../service/enteprise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  enterprise: EnterpriseEntity[]=[]

  constructor(private sEnterprise: EntepriseService, private router: Router){}

  ngOnInit(): void {
    this.getEnterpriseActive();
  }

  getEnterpriseActive(){
    this.sEnterprise.getEnterpriseActive().subscribe(enterprise=>{
      this.enterprise=enterprise;
      console.log(enterprise);
    })
  }

  deleteSoftEnterprise(id:number){
    this.sEnterprise.deleteSoftEnterprise(id).subscribe(enterprise=>{
      this.getEnterpriseActive();
    })
  }
}
