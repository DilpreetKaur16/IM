import { Component } from '@angular/core';
import { PermissionsService } from './services/menu/permissions.service';
import { AuthenticationService } from './services/auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'Inventory Management';
  visibleModules: string[] = [];
  roleInfo :any;
  constructor(private permissionService: PermissionsService, private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.updateVisibleModules();
  }

  updateVisibleModules(): void {
    const role = this.authService.userRole;
    this.roleInfo = this.authService.userRole;
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
  currentRouteIsUsers(): boolean {
    return this.router.url === '/users';
  }


}
