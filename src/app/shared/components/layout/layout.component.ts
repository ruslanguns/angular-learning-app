import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  @Input() appName: string = '';
  @Input() copyRightName: string = '';
  @Input() copyRightUrl: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
