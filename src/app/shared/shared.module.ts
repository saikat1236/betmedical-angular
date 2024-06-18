import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { AlertComponent } from './_alert/alert.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    TruncatePipe,
    AlertComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    CarouselModule,
    BreadcrumbComponent,
    TruncatePipe,
    ReactiveFormsModule,
    FormsModule,
    AlertComponent,
    SpinnerComponent
  ]  
})
export class SharedModule { }
