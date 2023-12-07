import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EquipmentDetailsComponent} from "./components/equipment-details/equipment-details.component";
import {EquipmentsComponent} from "./components/equipments/equipments.component";

const routes: Routes = [
  { path: 'equipments', component: EquipmentsComponent },
  { path: 'equipments/:id', component: EquipmentDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
