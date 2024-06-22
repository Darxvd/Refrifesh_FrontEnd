import { Component, OnInit } from '@angular/core';
import { TecnicEntity } from '../model/tecnic-entity';
import { TecnicService } from '../service/tecnic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-t',
  templateUrl: './list-t.component.html',
  styleUrls: ['./list-t.component.css']
})
export class ListTComponent implements OnInit {

  tecnic: TecnicEntity[] = [];
  currentPage = 0;
  pageSize = 5;
  totalItems = 0;
  totalPages = 0;

  
  constructor(private sTecnic: TecnicService, private router: Router) { }
  
  ngOnInit(): void {
    this.getTecnicActive();
  }
  
  getTecnicActive(): void {
    this.sTecnic.getTecnicActive(this.currentPage, this.pageSize).subscribe(data => {
      this.tecnic = data.content;
      this.totalItems = data.totalElements;
      this.calculateTotalPages();
    });
  }

  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.getTecnicActive();
  }
    
  arrayOne(): any[] {
    return Array(this.totalPages).fill(0).map((x, i) => i);
  }

  getId(id: number) {
    this.sTecnic.id = id;
    this.router.navigate(['/home/tecnico/update']);
  }

  deleteSoftTecnic(id: number) {
    this.sTecnic.deleteSoftTecnic(id).subscribe(tecnic => {
      this.getTecnicActive();
    });
  }
  
  getImageUrl(relativeUrl: string): string {
    return `http://localhost:8085${relativeUrl}`; 
  }

}
