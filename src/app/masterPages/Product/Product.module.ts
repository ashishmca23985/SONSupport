import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ProductComponent } from './Product.component';
import { ProductRoutingModule } from './Product-routing.module';

@NgModule({
  imports: [
    ProductRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ ProductComponent ]
})
export class ProductModule { }
