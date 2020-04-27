import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent {

  constructor(private appService: AppService, private router: Router) {}

  isFormInvalid = false;

  userForm = new FormGroup({
    firstName: new FormControl('', Validators.nullValidator && Validators.required),
    lastName: new FormControl('', Validators.nullValidator && Validators.required),
    email: new FormControl('', Validators.nullValidator && Validators.required),
    streetNumber: new FormControl('', Validators.nullValidator && Validators.required),
    streetName: new FormControl('', Validators.nullValidator && Validators.required),
    city: new FormControl('', Validators.nullValidator && Validators.required),
    state: new FormControl('', Validators.nullValidator && Validators.required),
    zipcode: new FormControl('', Validators.nullValidator && Validators.required)
  });

  onSubmit() {
    this.isFormInvalid = this.userForm.invalid;
    if (!this.userForm.invalid) {
      this.appService.userData = this.userForm.value;
      this.router.navigate(['/confirm']);
    }
  }

}
