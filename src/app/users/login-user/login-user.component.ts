import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {AuthUserService} from "../shared/auth-user.service";

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(6)]]
  })
  loading: boolean = false

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar,
              private router: Router, private authServiceUser: AuthUserService) {
  }


  ngOnInit(): void {
  }

  private loginOkNotification(u) {
    this.snackBar.open('Bem vindo ' + u.firstName, 'OK', {
      duration: 2000,
      verticalPosition: 'top'
    })
  }

  private loginErrorNotNotification(err) {
    this.snackBar.open(err, 'Ok', {
      duration: 2000,
      verticalPosition: 'top'
    })
  }

  onSubmit() {
    this.loading = true;
    let user= {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    this.authServiceUser.loginUser(user).subscribe((u)=>{
      if(u== false){
        this.loginErrorNotNotification("Credenciais invalidas");
        this.loading = false;
        this.loginForm.value.email = '';
        this.loginForm.value.password = '';
      }else{
        this.loginOkNotification(u);

          // @ts-ignore
        localStorage.setItem("uid",u.uid);

        this.router.navigateByUrl('/');
        setTimeout(function (){
          window.location.reload()
        },3000)

      }
    })

  }


  loginGoogle() {


  }
}
