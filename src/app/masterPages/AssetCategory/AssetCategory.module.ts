import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AssetCategoryComponent } from './AssetCategory.component';
import { AssetCategoryRoutingModule } from './AssetCategory-routing.module';

@NgModule({
  imports: [
    AssetCategoryRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ AssetCategoryComponent ]
})
export class AssetCategoryModule { }
