import { Component } from '@angular/core';
import { PermissionsService } from '../services/menu/permissions.service';
import { AuthenticationService } from '../services/auth/authentication.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  visibleModules: string[] = [];

  constructor(private permissionService: PermissionsService, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.updateVisibleModules();
  }

  updateVisibleModules(): void {
    const role = this.authService.userRole;
    this.visibleModules = this.permissionService.permissions[role] || [];
  }

  getRouterLink(module: string): string {
    switch (module) {
      case 'User Management':
        return '/users';
      case 'purchase':
        return '/purchase';
      case 'store':
        return '/store';
      case 'Material Issue':
        return '/material-issue';
      default:
        return '/';
    }
  }


  checkPermission(moduleName: string): boolean {
    const userRole = this.authService.userRole;
    const allowedModules = this.permissionService.permissions[userRole];
    return allowedModules && allowedModules.includes(moduleName);
  }



}
