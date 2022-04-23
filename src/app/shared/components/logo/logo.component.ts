import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <a
      class="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0"
    >
      <app-logo-image></app-logo-image>
      <span class="ml-3 text-xl">{{ appName }}</span>
    </a>
  `,
})
export class LogoComponent {
  @Input() appName = '';
}
