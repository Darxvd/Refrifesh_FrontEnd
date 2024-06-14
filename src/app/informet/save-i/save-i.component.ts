import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EnterpriseEntity } from 'src/app/enterprise/model/enterprise-entity';
import { EntepriseService } from 'src/app/enterprise/service/enteprise.service';
import { TecnicEntity } from 'src/app/tecnic/model/tecnic-entity';
import { TecnicService } from 'src/app/tecnic/service/tecnic.service';
import { InformService } from '../service/inform.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-save-i',
  templateUrl: './save-i.component.html',
  styleUrls: ['./save-i.component.css']
})
export class SaveIComponent implements OnInit{



  fmrInfTecnic = new FormGroup({
    idInfo: new FormControl(''),
    idEmpresa: new FormControl(''),
    idTecnico: new FormControl(''),
    fallaInfo: new FormControl(''),
    obserInfo: new FormControl(''),
    recoInfo: new FormControl(''),
    fechaInfo: new FormControl(''),
    horaInfor: new FormControl(''),
    nserieMaquina: new FormControl(''),
    nomMaquina: new FormControl(''),
    mcaMaquina: new FormControl(''),
    modMaquina: new FormControl(''),
    arubiMaquina: new FormControl(''),
    voltMaquina: new FormControl(''),
    ampMaquina: new FormControl(''),
    potMaquina: new FormControl(''),
    temMaquina: new FormControl(''),
    preMaquina: new FormControl(''),
    gasMaquina: new FormControl(''),
    otrosMaquina: new FormControl('')
  })

  selectedEnterprise: EnterpriseEntity | undefined;
  selectedtecnic: TecnicEntity | undefined;
  enterprises: EnterpriseEntity[] = [];
  tecnics: TecnicEntity[] = [];

  constructor(private enterpriseService: EntepriseService, private tecnicService: TecnicService, private informtecnic: InformService, private router: Router) { }

  ngOnInit() {
    const now = new Date();
    const localDate = now.toISOString().substring(0, 10);
    const localTime = now.toTimeString().substring(0, 5);

    this.fmrInfTecnic.patchValue({
      fechaInfo: localDate,
      horaInfor: localTime
    });
  }

  searchEnterprisesByRzc(event: any): void {
    const inputElement = event.target as HTMLInputElement;
    const name = inputElement.value;
    if (!name.trim()) {this.enterprises = [];return;}
    this.enterpriseService.searchEnterprisesByRzc(name).subscribe(
      (data: EnterpriseEntity[]) => {
        this.enterprises = data;
      },
      (error: any) => {
        console.error('Error al buscar empresas por nombre:', error);
      }
    );
  }

  selectEnterprise(enterprise: EnterpriseEntity): void {
    this.selectedEnterprise = enterprise;
    this.enterprises = [];
    const searchInput = document.getElementById('searchInput') as HTMLInputElement;
    if (searchInput) {
      searchInput.value = '';
    }
  }

  searchTecnicByTec(event: any): void {
    const inputElement = event.target as HTMLInputElement;
    const name = inputElement.value;
    if (!name.trim()) {this.tecnics = [];return;}
    this.tecnicService.searchTecnicByTec(name).subscribe(
      (data: TecnicEntity[]) => {
        this.tecnics = data;
      },
      (error: any) => {
        console.error('Error al buscar empresas por nombre:', error);
      }
    );
  }

  selectTecnic(tecnic: TecnicEntity): void {
    this.selectedtecnic = tecnic;
    this.tecnics = [];
    const searchInput = document.getElementById('searchInputs') as HTMLInputElement;
    if (searchInput) {
      searchInput.value = '';
    }
  }

      cleanInputEnterprise():void{
      const id = document.getElementById('idempresa') as HTMLInputElement;
      const nombre = document.getElementById('nombreempresa') as HTMLInputElement;
      if (id && nombre) {
        id.value = '';
        nombre.value = '';
        }
        }
        
  cleanInputTecnic():void{
  const nombretecnico = document.getElementById('nombretecnico') as HTMLInputElement;
  const idtecnico = document.getElementById('idtecnico') as HTMLInputElement;
  if (idtecnico && nombretecnico) {
    idtecnico.value = '';
    nombretecnico.value = '';
  }
  }

  saveInformTecnic(){
    const informData = {
        ...this.fmrInfTecnic.value,
        idEmpresa: this.selectedEnterprise?.idEmpresa,
        idTecnico: this.selectedtecnic?.idTecnico
    };
    this.informtecnic.saveInformTecnic(informData).subscribe(res=>{
        this.fmrInfTecnic.reset();
        this.router.navigate(['home/informe/list']);
    });
}


}
