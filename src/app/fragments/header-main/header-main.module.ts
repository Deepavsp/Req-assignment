import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMainComponent } from './header-main.component';

@NgModule({
  declarations: [HeaderMainComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderMainComponent
  ]
})
export class HeaderMainModule { }
