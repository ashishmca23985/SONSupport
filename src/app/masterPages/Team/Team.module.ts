import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { TeamComponent } from './Team.component';
import { TeamRoutingModule } from './Team-routing.module';

@NgModule({
  imports: [
    TeamRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ TeamComponent ]
})
export class TeamModule { }
