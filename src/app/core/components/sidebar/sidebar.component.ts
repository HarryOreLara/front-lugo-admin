import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@environments/environment';
import { IMenu } from '@interfaces/index';
import { CONST_MENU } from '@temp/menu-temp.const';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  public menus: Array<IMenu> = CONST_MENU;
  private dashboardurl: string = environment.dashboard;

  @Input() public user: any;

  constructor(private readonly router: Router) {}

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
}
