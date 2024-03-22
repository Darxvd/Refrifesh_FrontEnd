import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SaveComponent } from './enterprise/save/save.component';
import { ListComponent } from './enterprise/list/list.component';
import { UpdateComponent } from './enterprise/update/update.component';
import { TecnicComponent } from './tecnic/tecnic.component';
import { ListTComponent } from './tecnic/list-t/list-t.component';
import { SaveTComponent } from './tecnic/save-t/save-t.component';
import { UpdateTComponent } from './tecnic/update-t/update-t.component';
import { InformetComponent } from './informet/informet.component';
import { ListIComponent } from './informet/list-i/list-i.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterpriseComponent,
    HomeComponent,
    NavbarComponent,
    SaveComponent,
    ListComponent,
    UpdateComponent,
    TecnicComponent,
    ListTComponent,
    SaveTComponent,
    UpdateTComponent,
    InformetComponent,
    ListIComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
