import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class VehiculosService {
  private httpClient = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/vehiculos';

  getAllVehiculos(){
    return this.httpClient.get(this.apiUrl);
  }
}
