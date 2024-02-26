import { Component, OnInit } from '@angular/core';
import { EntepriseService } from './service/enteprise.service';
import { EnterpriseEntity } from './model/enterprise-entity';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements OnInit{

  enterprise: EnterpriseEntity[]=[]

  constructor(private sEnterprise: EntepriseService){}

  ngOnInit(): void {
    this.getEnterprise();
  }

  getEnterprise(){
    this.sEnterprise.getEnterprise().subscribe(enterprise=>{
      this.enterprise=enterprise;
      console.log(enterprise);
    })
  }

}
