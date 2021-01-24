import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { MobileRoutingModule } from './mobile-routing.module';

const COMPONENTS: Type<void>[] = [];
const COMPONENTS_NOROUNT: Type<void>[] = [];

@NgModule({
  imports: [
    SharedModule,
    MobileRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
})
export class MobileModule { }
