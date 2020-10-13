import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {User} from "../Model/User.model";
import { MAT_MOMENT_DATE_FORMATS,  MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {ValidateBrService} from "angular-validate-br";
import {AuthUserService} from "../shared/auth-user.service";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE,  ]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },

  ],

})
export class RegisterUserComponent implements OnInit {


  constructor(private fb: FormBuilder, private snackBar: MatSnackBar,
              private router: Router, private validateBrService:ValidateBrService, private authUser:AuthUserService) { }
  formRegister: FormGroup = this.fb.group({
    'firstname': ['', [Validators.required]],
    'lastname': ['', [Validators.required]],
    'cpf': ['', [Validators.compose([this.validateBrService.cpf])]],
    'birthday': ['', [Validators.required]],
    'email': ['', [Validators.required, Validators.email]],
    'password1': ['', [Validators.required, Validators.minLength(6)]],
    'password2': ['', [Validators.required, Validators.minLength(6)]]
  }, {
    validators: this.matchingPasswords
  })

  ngOnInit() {

  }


  matchingPasswords(group: FormGroup) {
    if (group) {
      const password1 = group.controls['password1'].value;
      const password2 = group.controls['password2'].value;
      if (password1 == password2) {
        return null;
      }
    }
    return { macthing: false }
  }


  private loginOkNotification(u) {
    this.snackBar.open('Bem vindo ' + u.firstName, 'OK', {
      duration: 2000,
      verticalPosition: 'top'
    })
    this.authUser.cofirmauth()
  }

  private loginErrorNotNotification(err) {
    this.snackBar.open(err, 'Ok', {
      duration: 2000,
      verticalPosition: 'top'
    })
  }
  onSubmit() {
    let dia = this.formRegister.value.birthday._i.date
    let mes = this.formRegister.value.birthday._i.month + 1
    let ano = this.formRegister.value.birthday._i.year
    var dates = dia + "/" + mes + "/" + ano
    const newUser: User = {
      firstName: this.formRegister.value.firstname,
      lastName: this.formRegister.value.lastname,
      email: this.formRegister.value.email,
      password: this.formRegister.value.password1,
      birthday: dates,
      cpf:this.formRegister.value.cpf
    }
    this.authUser.registerUser(newUser).subscribe((u)=>{
      setTimeout(function (){
      this.authUser.loginUser(u).subscribe((s)=>{
        if(u== false){
          this.loginErrorNotNotification("Essa conta ja existe");
        }else{
          this.loginOkNotification(u);
          // @ts-ignore
          localStorage.setItem("uid",u.uid);
          this.router.navigateByUrl('/');

        }
      })
      },3000)
      window.location.reload()
    })
  }

}
