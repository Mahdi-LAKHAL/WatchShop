import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
	selector: 'signin',
	templateUrl: './signin.component.html' 
})
export class SigninComponent {

	loginForm: FormGroup;
	model: any={};
	constructor(private fb: FormBuilder) {
		this.loginForm = this.fb.group({
			email: [''],
			password: ['']
		})
	 }

	 login(form: any){
		 console.log('This is my credentials', this.model);
		 
	 }

}
