import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CoreComponents } from './components';

@NgModule({
  imports: [SharedModule, RouterModule],
  declarations: [...CoreComponents],
  exports: [...CoreComponents],
  providers: [],
})
export class CoreModule {}
