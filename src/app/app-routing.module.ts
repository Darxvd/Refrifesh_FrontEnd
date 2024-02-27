import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { SaveComponent } from './enterprise/save/save.component';
import { ListComponent } from './enterprise/list/list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'empresa/list', component: ListComponent },
  { path: 'empresa/save', component: SaveComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
