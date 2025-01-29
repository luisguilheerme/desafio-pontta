import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  imports: [
        MatFormFieldModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        FormsModule
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

    product: Product = {id: 0, name: '', description: ''}
  
    isEdit = false;
  
    constructor( private service: ProductService, private router: Router, private route: ActivatedRoute ) {}
  
    ngOnInit(): void {
  
      const id = this.route.snapshot.paramMap.get('id');
  
      if(id) {
        this.isEdit = true;
        this.getById(Number(id));
      }
    }
  
    getById(id: number) {
      this.service.getById(id).subscribe((product) => {
        this.product = product;
      })
    }
  
    saveProduct() {
      if(this.isEdit) {
        this.service.update(this.product.id, this.product).subscribe(() => {
          window.alert("Produto alterado com sucesso");
          this.goBack();
        })
      }
      else {
        this.service.insert(this.product).subscribe(() => {
          window.alert("Produto cadastrado com sucesso");
          this.goBack();
        })
      }
    }
    
    goBack() {
      this.router.navigate(['/products']);
    }
  }
