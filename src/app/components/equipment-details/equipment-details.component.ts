import {Component, OnInit} from '@angular/core';
import {Equipment} from "../../models/equipment";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Component({
  selector: 'app-equipment-details',
  templateUrl: './equipment-details.component.html',
  styleUrl: './equipment-details.component.css'
})
export class EquipmentDetailsComponent implements OnInit{
  equipment!: Equipment;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}



    ngOnInit(): void {
        console.log('EquipmentDetailsComponent created!');

        const equipmentIdParam = this.route.snapshot.paramMap.get('id');

        if (equipmentIdParam !== null) {
            const equipmentId = +equipmentIdParam;

            this.http.get<Equipment>(`http://localhost:8081/api/v1/equipment/${equipmentId}`)
                .pipe(
                    map((res: any) => {
                        this.equipment = res.result;
                        console.log('hi1');
                        console.log(res.result);
                    })
                )
                .subscribe(
                    () => {
                        console.log('hi2');
                    },
                    error => {
                        console.error('Error fetching equipment details:', error);
                    }
                );
        } else {
            console.log('EquipmentDetailsComponent: id is null');
        }
    }



}
