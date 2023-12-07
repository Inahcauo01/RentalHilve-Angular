import {Component} from '@angular/core';
import {CEquipment, Equipment} from "../../models/equipment";
import {EquipmentService} from "../../services/equipment.service";

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrl: './equipments.component.css'
})
export class EquipmentsComponent {
  equipments: Equipment[] = [];
  toSave: Equipment = new CEquipment();

  constructor(private equipmentService: EquipmentService) {
  }

  ngOnInit(): void {
    this.equipmentService.getEquipments().subscribe((data: Equipment[]) => {
      this.equipments = data;
    });
  }

  onSubmit() {
    console.log(this.toSave);
    this.equipmentService.addEquipments(this.toSave).subscribe({
      next: (data) => {
        this.onSuccessSave(data?.result);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onSuccessSave(equipment?: Equipment) {
    if (equipment) {
      this.equipments.push(equipment);
      // this.toastr.success(`Equipment with ID ${equipment.id} saved successfully.`, 'Success');
    }
  }

  deleteEquipment(id: number | undefined) {
    this.equipmentService.deleteEquipment(id).subscribe({
      next: (data) => {
        this.onSuccessDelete(id);
      },
      error: (err) => {
        console.log(err);
        // this.toastr.error(`Equipment with ID ${id} not deleted.`, 'Error');
      },
    });
  }

  onSuccessDelete(id: number | undefined) {
    console.log(`Equipment with ID ${id} deleted successfully.`);
    // this.toastr.success(`Equipment with ID ${id} deleted successfully.`, 'Success');
  }
}
