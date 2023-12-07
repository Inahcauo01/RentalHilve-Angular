import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ResponseModel } from '../core/request/response.model';
import { Equipment } from '../models/equipment';

@Injectable({
  providedIn: 'root',
})
export class EquipmentService {
  private apiUrl = 'http://localhost:8081/api/v1/equipment';

  constructor(private http: HttpClient) {}

  getEquipments(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(this.apiUrl).pipe(
      map((res: any) => res.result)
    );
  }

  getEquipmentById(id: number | undefined): Observable<Equipment> {
    return this.http.get<Equipment>(`${this.apiUrl}/${id}`);
  }

  addEquipments(equipment: Equipment): Observable<ResponseModel<Equipment>> {
    return this.http.post<ResponseModel<Equipment>>(this.apiUrl, equipment);
  }

  deleteEquipment(id: number | undefined) {
    return this.http.delete<ResponseModel<Equipment>>(`${this.apiUrl}/${id}`);
  }
}
