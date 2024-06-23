import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EnterpriseEntity } from 'src/app/enterprise/model/enterprise-entity';
import { EntepriseService } from 'src/app/enterprise/service/enteprise.service';
import { TecnicEntity } from 'src/app/tecnic/model/tecnic-entity';
import { TecnicService } from 'src/app/tecnic/service/tecnic.service';
import { InformService } from '../service/inform.service';
import { Router } from '@angular/router';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-save-i',
  templateUrl: './save-i.component.html',
  styleUrls: ['./save-i.component.css']
})
export class SaveIComponent implements OnInit{
/*
  signatureNeeded!: boolean;
  signaturePad!: SignaturePad;
  @ViewChild('canvas') canvasEl!: ElementRef;
  signatureImg!: string;
  signatureBlob!: Blob;
  
  selectedEnterprise: EnterpriseEntity | undefined;
  selectedtecnic: TecnicEntity | undefined;
  enterprises: EnterpriseEntity[] = [];
  tecnics: TecnicEntity[] = [];

  frmInformeTecnic: FormGroup;

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
    firmaCliente: new FormControl(''),
    otrosMaquina: new FormControl('')
  })

  constructor(private formBuilder: FormBuilder,private enterpriseService: EntepriseService, private tecnicService: TecnicService, private informtecnic: InformService, private router: Router) 
  {
    this.frmInformeTecnic = this.formBuilder.group({
      fallaInfo: ['', Validators.required],
      obserInfo: ['', Validators.required],
      recoInfo: ['', Validators.required],
      fechaInfo: [],
      horaInfor: [],
      nserieMaquina: ['', Validators.required],
      nomMaquina: ['', Validators.required],
      mcaMaquina: ['', Validators.required],
      modMaquina: ['', Validators.required],
      arubiMaquina: ['', Validators.required],
      voltMaquina: ['', Validators.required],
      ampMaquina: ['', Validators.required],
      potMaquina: ['', Validators.required],
      temMaquina: ['', Validators.required],
      preMaquina: ['', Validators.required],
      gasMaquina: ['', Validators.required],
      otrosMaquina: ['', Validators.required],
      firmaCliente: [null],
      idTecnico: ['', Validators.required],
      idEmpresa: ['', Validators.required]
    })
  }

  ngOnInit() {
    const now = new Date();
    const localDate = now.toISOString().substring(0, 10);
    const localTime = now.toTimeString().substring(0, 5);

    this.frmInformeTecnic.patchValue({
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
  
  ngAfterViewInit() {
    this.signaturePad = new SignaturePad(this.canvasEl.nativeElement);
  }

  savePad() {
    const base64Data = this.signaturePad.toDataURL('image/png');
    this.signatureNeeded = this.signaturePad.isEmpty();
    if (!this.signatureNeeded) {
      fetch(base64Data)
        .then(res => res.blob())
        .then(blob => {
          this.signatureBlob = blob;
          this.signatureImg = base64Data;
        });
    }
  }
  

  saveInforme(){
    if (this.frmInformeTecnic.valid){
      const formData = new FormData();
      formData.append('fallaInfo', this.frmInformeTecnic.get('fallaInfo')!.value);
      formData.append('obserInfo', this.frmInformeTecnic.get('obserInfo')!.value);
      formData.append('recoInfo', this.frmInformeTecnic.get('recoInfo')!.value);
      formData.append('fechaInfo', this.frmInformeTecnic.get('fechaInfo')!.value);
      formData.append('horaInfor', this.frmInformeTecnic.get('horaInfor')!.value);
      formData.append('nserieMaquina', this.frmInformeTecnic.get('nserieMaquina')!.value);
      formData.append('nomMaquina', this.frmInformeTecnic.get('nomMaquina')!.value);
      formData.append('mcaMaquina', this.frmInformeTecnic.get('mcaMaquina')!.value);
      formData.append('modMaquina', this.frmInformeTecnic.get('modMaquina')!.value);
      formData.append('arubiMaquina', this.frmInformeTecnic.get('arubiMaquina')!.value);
      formData.append('voltMaquina', this.frmInformeTecnic.get('voltMaquina')!.value);
      formData.append('ampMaquina', this.frmInformeTecnic.get('ampMaquina')!.value);
      formData.append('potMaquina', this.frmInformeTecnic.get('potMaquina')!.value);
      formData.append('temMaquina', this.frmInformeTecnic.get('temMaquina')!.value);
      formData.append('preMaquina', this.frmInformeTecnic.get('preMaquina')!.value);
      formData.append('gasMaquina', this.frmInformeTecnic.get('gasMaquina')!.value);
      formData.append('otrosMaquina', this.frmInformeTecnic.get('otrosMaquina')!.value);
      formData.append('idTecnico', this.frmInformeTecnic.get('idTecnico')!.value);
      formData.append('idEmpresa', this.frmInformeTecnic.get('idEmpresa')!.value);

      if (this.signatureBlob) {
        formData.append('firmaCliente', this.signatureBlob, 'firma.png');
      }

      this.informtecnic.saveInformTecnic(formData).subscribe(
        response => {
          this.frmInformeTecnic.reset();
          this.router.navigate(['home/informe/list'])
        },
        error => {
          console.log('Error al guardar informe', error);
        }
      );
    } else{
        console.log('El formulario no es valido. Verifica los campos');
    }
  }
  

  startDrawing(event: Event) {
    // works in device not in browser
  }

  moved(event: Event) {
    // works in device not in browser
  }

  clearPad() {
    this.signaturePad.clear();
  }


*/

signatureNeeded: boolean = true; // Inicialmente se asume que se necesita la firma
signaturePad!: SignaturePad;
@ViewChild('canvas') canvasEl!: ElementRef;
signatureImg: string | null = null; // Inicializamos la imagen de la firma como null
signatureBlob: Blob | null = null;

selectedEnterprise: EnterpriseEntity | undefined;
selectedtecnic: TecnicEntity | undefined;
enterprises: EnterpriseEntity[] = [];
tecnics: TecnicEntity[] = [];

frmInformeTecnic: FormGroup;

constructor(
  private formBuilder: FormBuilder,
  private enterpriseService: EntepriseService,
  private tecnicService: TecnicService,
  private informtecnic: InformService,
  private router: Router
) 
{
  this.frmInformeTecnic = this.formBuilder.group({
    idInfo: [''],
    idEmpresa: ['', Validators.required],
    idTecnico: ['', Validators.required],
    fallaInfo: ['', Validators.required],
    obserInfo: ['', Validators.required],
    recoInfo: ['', Validators.required],
    fechaInfo: [''],
    horaInfor: [''],
    nserieMaquina: ['', Validators.required],
    nomMaquina: ['', Validators.required],
    mcaMaquina: ['', Validators.required],
    modMaquina: ['', Validators.required],
    arubiMaquina: ['', Validators.required],
    voltMaquina: ['', Validators.required],
    ampMaquina: ['', Validators.required],
    potMaquina: ['', Validators.required],
    temMaquina: ['', Validators.required],
    preMaquina: ['', Validators.required],
    gasMaquina: ['', Validators.required],
    actMaquina: ['Activo'],
    firmaCliente: [null],
    otrosMaquina: ['', Validators.required]
  });
}

ngOnInit() {
  const now = new Date();
  const localDate = now.toISOString().substring(0, 10);
  const localTime = now.toTimeString().substring(0, 5);

  this.frmInformeTecnic.patchValue({
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
  this.frmInformeTecnic.patchValue({
    idEmpresa: enterprise.idEmpresa
  });
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
      console.error('Error al buscar técnicos por nombre:', error);
    }
  );
}

selectTecnic(tecnic: TecnicEntity): void {
  this.selectedtecnic = tecnic;
  this.tecnics = [];
  this.frmInformeTecnic.patchValue({
    idTecnico: tecnic.idTecnico
  });
  const searchInput = document.getElementById('searchInputs') as HTMLInputElement;
  if (searchInput) {
    searchInput.value = '';
  }
}

cleanInputEnterprise(): void {
  this.selectedEnterprise = undefined;
  this.frmInformeTecnic.patchValue({
    idEmpresa: ''
  });
  const id = document.getElementById('idempresa') as HTMLInputElement;
  const nombre = document.getElementById('nombreempresa') as HTMLInputElement;
  if (id && nombre) {
    id.value = '';
    nombre.value = '';
  }
}

cleanInputTecnic(): void {
  this.selectedtecnic = undefined;
  this.frmInformeTecnic.patchValue({
    idTecnico: ''
  });
  const nombretecnico = document.getElementById('nombretecnico') as HTMLInputElement;
  const idtecnico = document.getElementById('idtecnico') as HTMLInputElement;
  if (idtecnico && nombretecnico) {
    idtecnico.value = '';
    nombretecnico.value = '';
  }
}

ngAfterViewInit() {
  this.signaturePad = new SignaturePad(this.canvasEl.nativeElement);
}

savePad() {
  const base64Data = this.signaturePad.toDataURL('image/png');
  this.signatureNeeded = this.signaturePad.isEmpty();
  if (!this.signatureNeeded) {
    fetch(base64Data)
      .then(res => res.blob())
      .then(blob => {
        this.signatureBlob = blob;
        this.signatureImg = base64Data;
        this.frmInformeTecnic.patchValue({
          firmaCliente: blob 
        });
        this.clearPad();
      });
  }
}

saveInforme() {
  if (this.frmInformeTecnic.valid) {
    const formData = new FormData();
    Object.keys(this.frmInformeTecnic.controls).forEach(key => {
      formData.append(key, this.frmInformeTecnic.get(key)!.value);
    });

    if (this.signatureBlob) {
      formData.append('firmaCliente', this.signatureBlob, 'firma.png');
    }

    this.informtecnic.saveInformTecnic(formData).subscribe(
      response => {
        this.frmInformeTecnic.reset();
        this.router.navigate(['home/informe/list']);
      },
      error => {
        console.log('Error al guardar informe', error);
      }
    );
  } else {
    console.log('El formulario no es válido. Verifica los campos.');
  }
}

clearPad() {
  this.signaturePad.clear();

  const img = document.getElementById('imgCliente') as HTMLImageElement;
    if (img) {
      img.src = '';
    }
  }

  startDrawing(event: Event) {
  }

  moved(event: Event) {
  }

  exitList() {
    this.router.navigate(['home/informe/list']);
  }

}
