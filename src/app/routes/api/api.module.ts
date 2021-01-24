import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { ApiRoutingModule } from './api-routing.module';

const COMPONENTS: Type<void>[] = [];
const COMPONENTS_NOROUNT: Type<void>[] = [];

@NgModule({
  imports: [
    SharedModule,
    ApiRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
})
export class ApiModule { }
