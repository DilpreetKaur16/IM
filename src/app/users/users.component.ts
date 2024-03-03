import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userForm: FormGroup | any;
  manageForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(50)]],
      employeeId: ['', [Validators.required,Validators.pattern('^[0-9]*$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(16)]],
      department: ['',[Validators.required]]
    });
    this.manageForm = this.formBuilder.group({
      name: ['', [Validators.maxLength(50)]],
      empId: ['', [Validators.pattern('^[0-9]*$')]],
      dept: [''],
      emailId: ['', [ Validators.email]],
      status: ['']




    })
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      // Handle form submission
    }
  }

  resetForm(): void {
    this.userForm.reset();
  }
  resetManageForm(): void {
    this.manageForm.reset();
  }

  onFileSelected(event: any): void {
    // Handle file selection
    const file = event.target.files[0];
    console.log(file); // You can add file handling logic here
  }
}
