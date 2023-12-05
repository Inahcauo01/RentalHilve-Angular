import { EquipmentService } from '../../services/equipment.service';
import { Component } from '@angular/core';
import { Equipment, CEquipment } from '../../models/equipment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, RouterOutlet],
  templateUrl: './equipments.component.html',
  styleUrl: './equipments.component.css'
})
export class EquipmentComponent {
  equipments: Equipment[] = [];
  toSave: Equipment = new CEquipment();


  constructor(private equipmentService: EquipmentService){}

  ngOnInit(): void {

    this.equipmentService.getEquipments().subscribe((data: Equipment[]) => {
      this.equipments = data;
    })
  }

  onSubmit(){
    console.log(this.toSave);
    this.equipmentService.addEquipments(this.toSave).subscribe({
      next: data => {
        this.onSuccessSave(data?.result);
      },
      error : (err)=>{ console.log(err)},
    })
  }

  onSuccessSave(equipment?: Equipment) {
    if(equipment)
      this.equipments.push(equipment);
  }
}

