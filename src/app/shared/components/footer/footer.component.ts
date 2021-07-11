import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() appName: string = '';
  @Input() copyRightName: string = '';
  @Input() copyRightUrl: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
