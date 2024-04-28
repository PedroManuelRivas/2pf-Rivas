import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDirectiveDirective } from './directives/custom-directive.directive';



@NgModule({
  declarations: [
    CustomDirectiveDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomDirectiveDirective
  ]
})
export class SharedModule { }
