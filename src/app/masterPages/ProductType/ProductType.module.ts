import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ProductTypeComponent } from './ProductType.component';
import { ProductTypeRoutingModule } from './ProductType-routing.module';

@NgModule({
  imports: [
    ProductTypeRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ ProductTypeComponent ]
})
export class ProductTypeModule { }
