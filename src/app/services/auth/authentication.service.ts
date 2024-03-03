import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userRole: 'superadmin' | 'admin' | 'user' = 'superadmin' ;
  constructor() { }
}
