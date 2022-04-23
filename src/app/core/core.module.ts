import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CoreComponents } from './components';

@NgModule({
  imports: [SharedModule],
  declarations: [...CoreComponents],
  exports: [...CoreComponents],
  providers: [],
})
export class CoreModule {}
