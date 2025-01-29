import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { ClientListComponent } from "../client-list/client-list.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-crud',
  imports: [
    MatButtonModule,
    ClientListComponent,
],
  templateUrl: './client-crud.component.html',
  styleUrl: './client-crud.component.css'
})
export class ClientCrudComponent {

  constructor( private router: Router ) {}

  goToClientDetail() {
    this.router.navigate(['/clients/detail']);
  }
}
