import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ProductListComponent } from "../product-list/product-list.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  imports: [MatButtonModule, ProductListComponent],
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.css'
})
export class ProductCrudComponent {

  constructor( private router: Router ) {}

  goToProductDetail() {
    this.router.navigate(['/products/detail'])
  }

}
