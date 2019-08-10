import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HeaderMainModule } from 'src/app/fragments/header-main/header-main.module';
import { UserService } from 'src/app/services/user.service';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderMainModule
  ],
  providers: [
    UserService
  ]
})
export class HomeModule { }
