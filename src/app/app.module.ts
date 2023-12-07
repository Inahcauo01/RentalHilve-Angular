import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipmentsComponent } from './components/equipments/equipments.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {EquipmentService} from "./services/equipment.service";
import {HttpClientModule} from "@angular/common/http";
import { EquipmentDetailsComponent } from './components/equipment-details/equipment-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EquipmentsComponent,
    NavbarComponent,
    EquipmentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EquipmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
