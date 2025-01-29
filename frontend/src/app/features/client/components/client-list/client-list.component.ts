import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';

import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-client-list',
  imports: [
    MatTableModule,
    MatCardModule,
    RouterModule
  ],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent implements OnInit {

  clients: Client[] = [];
  displayedColumns = ['id', 'name', 'email', 'actions'];

  constructor( private service: ClientService ) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.service.getAll().subscribe((clients) => {
      this.clients = clients;
    })
  }

  delete(id: number) {
    if(window.confirm("Deseja excluir o cliente?")) {
        this.service.delete(id).subscribe(() => {
          this.loadClients();
        });
    }      
  }
}
