import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  detailText = 'Limited to the San Francisco Bay Area -- Join our BETA!';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoSignUpPage() {
    this.router.navigate(['./signup']);
  }

}
