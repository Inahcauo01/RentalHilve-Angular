import { Injectable } from '@angular/core';
import {Equipment} from "../models/equipment";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ResponseModel} from "../core/request/response.model";

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  private apiUrl = "http://localhost:8081/api/v1/equipment";
  private savedEquipment: Equipment | null = null;

  constructor(private http: HttpClient) { }

  getEquipments(): Observable<Equipment[]>{
    return this.http.get<Equipment[]>(this.apiUrl).pipe(
      map((res: any) => res.result)
    )
  }

  addEquipments(equipment: Equipment): Observable<ResponseModel<Equipment>>{
    return  this.http.post<ResponseModel<Equipment>>(this.apiUrl, equipment);
  }
}
