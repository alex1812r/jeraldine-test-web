import { Component } from '@angular/core';

export interface Section {
  name: string;
  path: string;
  icon?: string
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  // sidenav routes
  routes: Section[] = [
    {
      name: 'Students',
      path: '/students',
      icon: 'supervisor_account'
    },
  ];
}
