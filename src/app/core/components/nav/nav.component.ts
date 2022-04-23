import { Component, Input } from '@angular/core';
import { NavigationConfig } from './interfaces';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [],
})
export class NavComponent {
  @Input() config: NavigationConfig = { items: [] };
}
