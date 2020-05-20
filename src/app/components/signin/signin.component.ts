import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'signin',
	templateUrl: './signin.component.html' 
})
export class SigninComponent {

	loginForm: FormGroup;
	model: any={};
	constructor(
		private fb: FormBuilder,
		private userService: UserService
		) {
		this.loginForm = this.fb.group({
			email: [''],
			password: ['']
		})
	 }

	 login(form: any){
		 console.log('This is my credentials', this.model);
		 this.userService.login(this.model);
	 }

}
