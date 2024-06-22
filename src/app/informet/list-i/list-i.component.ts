import { Component, OnInit } from '@angular/core';
import { InformTecnic } from '../model/informtecnic.entity';
import { InformService } from '../service/inform.service';
import { Router } from '@angular/router';
import { TecnicEntity } from 'src/app/tecnic/model/tecnic-entity';
import { EnterpriseEntity } from 'src/app/enterprise/model/enterprise-entity';
import { saveAs } from 'file-saver';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-i',
  templateUrl: './list-i.component.html',
  styleUrls: ['./list-i.component.css']
})
export class ListIComponent implements OnInit{

  inform: InformTecnic[] = [];
  tecnic: TecnicEntity[] = [];
  enterprise: EnterpriseEntity[] = [];

  constructor(private sInform: InformService, private router: Router){}
  
  ngOnInit(): void {
    this.getInformActive();
  }

  getId(id:number){
    this.sInform.id=id;
    this.router.navigate(['informe/update']);
  }

  getInformActive(){
    this.sInform.getInformActive().subscribe(inform=>{
      this.inform = inform;
    })
  }

  downloadInforme(idInfo: number): void {
    this.sInform.downloadInformeTecnico(idInfo).subscribe(blob => {
      
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `informe_tecnico_${idInfo}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, error => {
      console.error('Error al descargar el informe', error);
    });
  }

}
