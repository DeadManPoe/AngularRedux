import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, AbstractControl, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AdditionalValidators} from "../shared/AdditionalValidators";
import {AuthService} from "../auth.service";
import {NgRedux} from "ng2-redux";
import {State} from "../state/state";
import {UserActionBuilder} from "../state/user-action-builder";
const jwt = require('jwt-decode');

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.sass'],
    providers : [AuthService]
})
export class RegisterComponent implements OnInit {

    public registerForm: FormGroup;
    public emailControl: AbstractControl;
    public passwordControl: AbstractControl;
    public registerError : boolean;

    constructor(private _fb: FormBuilder, private _router: Router, private _auth : AuthService, private ngRedux : NgRedux<State>) {
        this.registerForm = _fb.group({
                email: new FormControl('', Validators.compose([Validators.required, AdditionalValidators.email])),
                password : new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]))
            }
        );
        this.emailControl = this.registerForm.controls['email'];
        this.passwordControl = this.registerForm.controls['password'];
    }

    ngOnInit() {
    }

    submitForm(){
        if(!this.registerForm.invalid){
            this._auth.register(this.registerForm.value).subscribe(value => {
                if(!value.success){
                    this.registerError = true
                }
                else{
                    let token : string = value.token;
                    this.ngRedux.dispatch(UserActionBuilder.setUserInfo(jwt(token)));
                    this.ngRedux.dispatch(UserActionBuilder.setMode('LOGGED'));
                    window.localStorage.setItem('jwt',token);
                    this._router.navigateByUrl('/collection');
                }
            })
        }
    }

}
