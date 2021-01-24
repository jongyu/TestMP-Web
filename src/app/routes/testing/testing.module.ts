import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { TestingRoutingModule } from './testing-routing.module';

const COMPONENTS: Type<void>[] = [];
const COMPONENTS_NOROUNT: Type<void>[] = [];

@NgModule({
  imports: [
    SharedModule,
    TestingRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
})
export class TestingModule { }
