import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponents } from './components';

@NgModule({
  declarations: [...SharedComponents],
  exports: [...SharedComponents],
  imports: [CommonModule],
})
export class SharedModule {}
