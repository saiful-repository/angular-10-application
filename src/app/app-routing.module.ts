import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { RegistrationComponent } from './registration/registration.component';
import { DataPassToComponentComponent } from './data-pass-to-component/data-pass-to-component.component';
import { DynamicFormControlWithRegularFormComponent } from './dynamic-form-control-with-regular-form/dynamic-form-control-with-regular-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

import { pathToFileURL } from 'url';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'view-registration', component: DataPassToComponentComponent },
  { path: 'dynamic-form', component: DynamicFormControlWithRegularFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
