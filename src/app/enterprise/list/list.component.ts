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

  enterprises: EnterpriseEntity[] = [];
  currentPage = 0;
  pageSize = 5;
  totalItems = 0;
  totalPages = 0;

  constructor(private sEnterprise: EntepriseService, private router: Router) {}

  ngOnInit(): void {
    this.getEnterpriseActive();
  }

  getEnterpriseActive(): void {
    this.sEnterprise.getEnterpriseActive(this.currentPage, this.pageSize).subscribe(data => {
      this.enterprises = data.content;
      this.totalItems = data.totalElements;
      this.calculateTotalPages();
    });
  }

  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.getEnterpriseActive();
  }
  
  arrayOne(): any[] {
    return Array(this.totalPages).fill(0).map((x, i) => i);
  }

  getId(id: number): void {
    this.sEnterprise.id = id;
    this.router.navigate(['home/empresa/update']);
  }

  deleteSoftEnterprise(id: number): void {
    this.sEnterprise.deleteSoftEnterprise(id).subscribe(() => {
      this.getEnterpriseActive();
    });
  }
  
}
