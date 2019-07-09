import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { DesignationComponent } from './Designation.component';
import { DesignationRoutingModule } from './Designation-routing.module';

@NgModule({
  imports: [
    DesignationRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ DesignationComponent ]
})
export class DesignationModule { }
