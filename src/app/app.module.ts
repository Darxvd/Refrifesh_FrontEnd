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

@NgModule({
  declarations: [
    AppComponent,
    EnterpriseComponent,
    HomeComponent,
    NavbarComponent,
    SaveComponent,
    ListComponent,
    UpdateComponent
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
