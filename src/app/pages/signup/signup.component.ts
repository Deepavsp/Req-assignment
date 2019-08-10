import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements AfterViewInit {

  detailText = 'Please confirm or edit your contact information, so that we can notify you when you are approved for our BETA.'
  signUpForm: FormGroup;
  url = 'http://localhost:3000/users';
  @ViewChild('phone', { static: false }) phoneField: ElementRef;


  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.signUpForm = fb.group({
      'name': [{ value: 'John Doe', disabled: true }, Validators.required],
      'email': [{ value: 'john@requantive.com', disabled: true }, Validators.required],
      'phone': [null, [
        Validators.required,
        Validators.pattern('^[0-9]{10}$')]]
    });
  }

  ngAfterViewInit() {
    this.phoneField.nativeElement.focus();
  }

  submitData(data: User) {
    this.userService.postUsers(this.url, data).subscribe(
      result => {
        console.log(result);
        if (result) {
          this.router.navigate(['./home']);
        }
      },
      error => console.log(error)
    );
  }

}
