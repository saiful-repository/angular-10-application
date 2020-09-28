import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { RegistrationComponent } from './registration/registration.component';
import { DataPassToComponentComponent } from './data-pass-to-component/data-pass-to-component.component';
import { DynamicFormControlWithRegularFormComponent } from './dynamic-form-control-with-regular-form/dynamic-form-control-with-regular-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailsComponent,
    CreateProductComponent,
    RegistrationComponent,
    DataPassToComponentComponent,
    DynamicFormControlWithRegularFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
