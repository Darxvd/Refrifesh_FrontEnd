import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { SaveComponent } from './enterprise/save/save.component';
import { ListComponent } from './enterprise/list/list.component';
import { UpdateComponent } from './enterprise/update/update.component';
import { ListTComponent } from './tecnic/list-t/list-t.component';
import { SaveTComponent } from './tecnic/save-t/save-t.component';
import { UpdateTComponent } from './tecnic/update-t/update-t.component';
import { ListIComponent } from './informet/list-i/list-i.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'empresa/list', component: ListComponent },
  { path: 'empresa/save', component: SaveComponent },
  { path: 'empresa/update', component: UpdateComponent },
  { path: 'tecnico/list', component: ListTComponent },
  { path: 'tecnico/save', component: SaveTComponent },
  { path: 'tecnico/update', component: UpdateTComponent },
  { path: 'informe/list', component: ListIComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
