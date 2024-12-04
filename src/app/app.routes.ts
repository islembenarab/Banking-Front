import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';

export const routes: Routes = [
  {
    path: "home",
    data: { title: "Home", showInNavbar: true } ,
    component : HomeComponent
  },
  {
    path: "services",
    data: { title: "Services", showInNavbar: true } ,
    component : HomeComponent
  },
  {
    path: "contacts",
    data: { title: "Contacts", showInNavbar: true } ,
    component : HomeComponent
  }
];
