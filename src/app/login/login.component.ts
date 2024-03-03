import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  login: boolean = false;

  constructor(private router: Router){

  }
  ngOnInit(): void{

  }
  
submit(){
  console.log("in submit");
  this.router.navigate(['/users'])
}
onSubmit() {
  // Implement login logic here
  console.log('Username:', this.username);
  console.log('Password:', this.password);
  this.router.navigate(['/users'])


}
}
