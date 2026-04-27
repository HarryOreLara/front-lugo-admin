import { Component, OnInit } from '@angular/core';
import { User } from '@class/auth/user.class';
import { AuthStateService } from '@states/lugo-state/auth-state.service';
import { LugoStateService } from '@states/lugo-state/lugo-state.service';

@Component({
  selector: 'app-layout',
  templateUrl: './app.layout.component.html',
  styleUrls: ['./app.layout.component.css'],
})
export class AppLayoutComponent implements OnInit {
  public user: User;

  constructor(private readonly authState: AuthStateService) {}

  ngOnInit(): void {
    this.user = this.authState.getUser()!;
  }
}
