import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from './../../shared/messages/notification.service';
import { LoginService } from './login.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  navigateTo: string;

  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private loginService: LoginService, private notificationService: NotificationService, private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    })

    this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/');
  }

  login() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(user =>
      this.notificationService.notify(`Bem vindo, ${user.name}`),
      response => this.notificationService.notify(response.error.message),
      () => {
        this.route.navigate([atob(this.navigateTo)]);
      }
    );
  }

}
