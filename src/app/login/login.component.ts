import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, Validators, FormGroup, AbstractControl} from "@angular/forms";
import {AdditionalValidators} from "../shared/AdditionalValidators";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

    public loginForm : FormGroup;
    public emailFormField : AbstractControl;
    public passwordFormField : AbstractControl;

    constructor(_fb: FormBuilder) {
        this.loginForm = _fb.group({
            email: new FormControl('', Validators.compose([Validators.required, AdditionalValidators.email])),
            password : new FormControl('',Validators.compose([Validators.minLength(6), Validators.required]))
        });
        this.emailFormField = this.loginForm.controls['email'];
        this.passwordFormField = this.loginForm.controls['password'];
    }

    ngOnInit() {
    }

    submitForm(){
        if(!this.loginForm.invalid){

        }
    }

}
