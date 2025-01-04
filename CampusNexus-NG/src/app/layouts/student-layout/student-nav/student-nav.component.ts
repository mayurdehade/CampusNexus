import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-nav',
  templateUrl: './student-nav.component.html',
  styleUrls: ['./student-nav.component.css'],
})
export class StudentNavComponent {
  isOpen = false;
  activeRoute: string = '';

  // Navigation links
  links = [
    {
      label: 'Dashboard',
      route: '/dashboard',
      icon: {
        viewBox: '0 0 20 20',
        path: '<path d="M2 10C2 5.58172 5.58172 2 10 2V10H18C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z" fill="currentColor"/><path d="M12 2.25195C14.8113 2.97552 17.0245 5.18877 17.748 8.00004H12V2.25195Z" fill="currentColor"/>',
      },
    },
    {
      label: 'UI Elements',
      route: '/ui-elements',
      icon: {
        viewBox: '0 0 20 20',
        path: '<path d="M5 3C3.89543 3 3 3.89543 3 5V7C3 8.10457 3.89543 9 5 9H7C8.10457 9 9 8.10457 9 7V5C9 3.89543 8.10457 3 7 3H5Z" fill="currentColor"/><path d="M5 11C3.89543 11 3 11.8954 3 13V15C3 16.1046 3.89543 17 5 17H7C8.10457 17 9 16.1046 9 15V13C9 11.8954 8.10457 11 7 11H5Z" fill="currentColor"/>',
      },
    },
    // Add more links as needed
  ];

  constructor(private router: Router) {
    this.activeRoute = this.router.url;
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
