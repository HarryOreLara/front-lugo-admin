import { Component, OnInit } from '@angular/core';
import { AuthCookieService } from '@service/cookie/cookie.service';

@Component({
  selector: 'app-layout',
  templateUrl: './app.layout.component.html',
  styleUrls: ['./app.layout.component.css'],
})
export class AppLayoutComponent implements OnInit {
  user: any | null;

  constructor(private readonly cookieService: AuthCookieService) {}

  ngOnInit(): void {
    this.user = this.cookieService.getUserDataFromToken();
  }
}
