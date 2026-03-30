import { Routes } from '@angular/router';
import { Home } from "./components/pages/home/home";
import { Vehiculos} from "./components/pages/vehiculos/vehiculos";
import { PageNotFound } from "./components/pages/page-not-found/page-not-found";

export const routes: Routes = [
  {path: "inicio", component: Home, title: 'Inicio'},
  {path: 'vehiculos', component: Vehiculos, title: 'Vehiculos'},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: '**', component: PageNotFound, title: 'Error 404'},
];
