import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { WebRoutingModule } from './web-routing.module';

const COMPONENTS: Type<void>[] = [];
const COMPONENTS_NOROUNT: Type<void>[] = [];

@NgModule({
  imports: [
    SharedModule,
    WebRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
})
export class WebModule { }
