import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmalSampleComponentComponent } from './amal-sample-component/amal-sample-component.component';



@NgModule({
  declarations: [
    AmalSampleComponentComponent
  ],
  exports: [
    AmalSampleComponentComponent
  ],
})
export class AmalSampleModule { }
