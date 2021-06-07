import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './usuarios/login/login.component';
import {Route, RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FilterPipe} from './pipes/filter.pipe';
import {MatSelectModule} from '@angular/material/select';

const routers: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'reservaciones', component: ReservacionesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReservacionesComponent,
    FilterPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routers),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
