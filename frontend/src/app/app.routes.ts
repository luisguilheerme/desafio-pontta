import { Routes } from '@angular/router';
import { ClientCrudComponent } from './features/client/components/client-crud/client-crud.component';
import { ClientDetailComponent } from './features/client/components/client-detail/client-detail.component';
import { ProductCrudComponent } from './features/product/components/product-crud/product-crud.component';
import { ProductDetailComponent } from './features/product/components/product-detail/product-detail.component';

export const routes: Routes = [
    { path: "clients", component: ClientCrudComponent },
    { path: "clients/detail", component: ClientDetailComponent },
    { path: "clients/detail/:id", component: ClientDetailComponent },
    { path: "products", component: ProductCrudComponent },
    { path: "products/detail", component: ProductDetailComponent },
    { path: "products/detail/:id", component: ProductDetailComponent },
];
