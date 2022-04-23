import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [SharedModule, PagesRoutingModule],
  declarations: [HomeComponent, AboutComponent],
  exports: [],
  providers: [],
})
export class PagesModule {}
