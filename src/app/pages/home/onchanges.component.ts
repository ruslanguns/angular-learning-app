import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-onchanges',
  template: `{{ nombre }}`,
})
export class NameComponent implements OnChanges {
  @Input() nombre: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('NameComponent ngOnChanges', changes['nombre']);
  }
}
