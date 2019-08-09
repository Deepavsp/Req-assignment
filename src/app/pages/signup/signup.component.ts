import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, AfterViewInit {

  detailText = 'Please confirm or edit your contact information, so that we can notify you when you are approved for our BETA.'
  signUpForm: FormGroup;
  name: '';
  email: '';
  phone: '';
  @ViewChild('phone', {static: false}) phoneField: ElementRef;

  constructor(private fb: FormBuilder) { 
    this.signUpForm = fb.group({
      'name': ['John Doe', Validators.required],
      'email': ['john@requantive.com', Validators.required],
      'phone': [null, Validators.required]
    });
  }

  ngOnInit() {
    this.signUpForm.get('name').disable();
    this.signUpForm.get('email').disable();

  }

  ngAfterViewInit() {
    this.phoneField.nativeElement.focus();
  }

  submitData(data) {
    
  }

}
