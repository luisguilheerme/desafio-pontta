import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   baseUrl = 'http://localhost:8080/products';
  
    constructor( private http: HttpClient ) {}

    insert(product: Product): Observable<Product> {
      return this.http.post<Product>(this.baseUrl, product);
    }
  
    update(id: number, product: Product): Observable<Product> {
      return this.http.put<Product>(`${this.baseUrl}/${id}`, product);
    }
  
    getAll(): Observable<Product[]> {
      return this.http.get<Product[]>(this.baseUrl);
    }
  
    getById(id: number): Observable<Product> {
      return this.http.get<Product>(`${this.baseUrl}/${id}`);
    }
  
    delete(id: number): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
}
