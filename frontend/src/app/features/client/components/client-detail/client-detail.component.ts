import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';

import { Client } from '../../models/client.model';
import { ClientService } from '../../services/client.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-detail',
  imports: [
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './client-detail.component.html',
  styleUrl: './client-detail.component.css'
})
export class ClientDetailComponent implements OnInit {

  client: Client = {id: 0, name: '', email: ''}

  isEdit = false;

  constructor( private service: ClientService, private router: Router, private route: ActivatedRoute ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if(id) {
      this.isEdit = true;
      this.getById(Number(id));
    }
  }

  getById(id: number) {
    this.service.getById(id).subscribe((client) => {
      this.client = client;
    })
  }

  saveClient() {
    if(this.isEdit) {
      this.service.update(this.client.id, this.client).subscribe(() => {
        window.alert("Cliente alterado com sucesso");
        this.goBack();
      })
    }
    else {
      this.service.insert(this.client).subscribe(() => {
        window.alert("Cliente cadastrado com sucesso");
        this.goBack();
      })
    }
  }
  
  goBack() {
    this.router.navigate(['/clients']);
  }
}
