import { Component, inject, OnInit} from '@angular/core';
import { VehiculosService } from "../../../services/vehiculos";

@Component({
  selector: 'app-vehiculos',
  imports: [],
  templateUrl: './vehiculos.html',
  styleUrl: './vehiculos.css',
})
export class Vehiculos implements OnInit{

  private vehiculosService = inject(VehiculosService);

  vehiculos : any[] = [];

  ngOnInit(): void {
    this.vehiculosService.getAllVehiculos().subscribe((res:any)=>{
      this.vehiculos = res.data;
      console.log("repuesta: ",res);
    })

  }

}
