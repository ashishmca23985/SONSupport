import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { RoleComponent } from './Role.component';
import { RoleRoutingModule } from './Role-routing.module';

@NgModule({
  imports: [
    RoleRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ RoleComponent ]
})
export class RoleModule { }