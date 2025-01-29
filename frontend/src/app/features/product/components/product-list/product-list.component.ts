import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';

import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [
    MatTableModule,
    MatCardModule,
    RouterModule 
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products: Product[] = []
  displayedColumns = ['id', 'name', 'description', 'actions'];

  constructor( private service: ProductService ) {}

  ngOnInit(): void {
    this.loadProducts();
  }  

  loadProducts() {
    this.service.getAll().subscribe((products) => {
      this.products = products;
    })
  }

  delete(id: number) {
    if(window.confirm("Deseja excluir o produto?")) {
        this.service.delete(id).subscribe(() => {
          this.loadProducts();
        });
    }      
  }
}
