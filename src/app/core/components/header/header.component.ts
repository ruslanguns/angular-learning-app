import { Component, Input, OnInit } from '@angular/core';
import { NavigationConfig } from '../nav/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() appName: string = '';
  @Input() repositoryUrl: string = '';

  navigationConfig: NavigationConfig = {
    items: [
      { title: 'Home', url: '/' },
      { title: 'About', url: '/about' },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
