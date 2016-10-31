import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, Validators, FormGroup, AbstractControl} from "@angular/forms";
import {AdditionalValidators} from "../shared/AdditionalValidators";
import {AuthService} from "../auth.service";
import {NgRedux} from "ng2-redux";
import {State} from "../state/state";
import {UserActionBuilder} from "../state/user-action-builder";
import {Router} from "@angular/router";
const jwt = require('jwt-decode');

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass'],
    providers : [AuthService]
})
export class LoginComponent implements OnInit {
    public loginError : boolean;
    public loginForm : FormGroup;
    public emailFormField : AbstractControl;
    public passwordFormField : AbstractControl;

    constructor(private _fb: FormBuilder, private _auth : AuthService, private ngRedux : NgRedux<State>, private _router : Router) {
        this.loginForm = _fb.group({
            email: new FormControl('', Validators.compose([Validators.required, AdditionalValidators.email])),
            password : new FormControl('',Validators.compose([Validators.minLength(6), Validators.required])),
            remember : new FormControl(false)
        });
        this.emailFormField = this.loginForm.controls['email'];
        this.passwordFormField = this.loginForm.controls['password'];
    }

    ngOnInit() {
    }

    submitForm(){
        if(!this.loginForm.invalid || true){
            this._auth.login(this.loginForm.value).subscribe((value)=>{
                if(value.success){
                    let token : string = value.token;
                    this.ngRedux.dispatch(UserActionBuilder.setUserInfo(jwt(token)));
                    this.ngRedux.dispatch(UserActionBuilder.setMode('LOGGED'));
                    window.localStorage.setItem('jwt',token);
                    this._router.navigateByUrl('/collection');
                }
                else{
                    this.loginError = true;
                }

            })
        }
    }

}
