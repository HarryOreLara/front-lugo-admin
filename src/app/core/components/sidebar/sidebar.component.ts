import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@class/auth/user.class';
import { environment } from '@environments/environment';
import { IMenu } from '@interfaces/index';
import { AuthFacade } from '@patterns//facade/auth.facade';
import { CONST_MENU } from '@temp/menu-temp.const';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  public get name() {
    return `${this.user.firstName} ${this.user.lastName}`;
  }

  public menus: Array<IMenu> = CONST_MENU;
  private dashboardurl: string = environment.dashboard;
  @Input() public user: User;

  constructor(
    private readonly router: Router,
    private readonly authFacade: AuthFacade,
  ) {}

  ngOnInit(): void {}

  public navigateChild(child: IMenu, father: IMenu) {
    if (child.children.length <= 0) {
      const routerChild = child.route;
      const routerNavigate = this.dashboardurl.concat(routerChild);

      this.router.navigateByUrl(routerNavigate);
    }
  }

  public navigateGrandChild(child: IMenu, father: IMenu) {
    const routeFather = father.route;
    const routerChild = child.route;
    const routerNavigate = this.dashboardurl.concat(routeFather, routerChild);

    return this.router.navigateByUrl(routerNavigate);
  }

  public logout() {
    this.authFacade.logoutFacade();
  }
}
