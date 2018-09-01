import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { UserService } from '../service/user.service';

import { Router } from '@angular/router';

import { User } from '../model/user.model';



@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

    userForm: FormGroup;


 constructor(private formBuilder: FormBuilder,

             private userService: UserService,

             private router: Router) { }



    ngOnInit() {

      this.initForm();

    }


    initForm() {


        this.userForm = this.formBuilder.group({

          firstName: ['', Validators.required],

          lastName: ['', Validators.required],

          jour:['', [Validators.required, Validators.min(0), Validators.max(31), Validators.pattern(/^\d\d/)]],

          moi:['', [ Validators.required]],

          year:['', [Validators.required]],

          email:['', [Validators.required,Validators.email]],

          password: ['',[Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],

          rolePreference: ['', Validators.required]

      });
      }

    onSubmitForm() {

   const formValue = this.userForm.value;

   const newUser = new User(

     formValue['firstName'],

     formValue['lastName'],

     formValue['jour'],

     formValue['moi'],

     formValue['year'],

     formValue['email'],

     formValue['password'],

     formValue['rolePreference']

 );

   this.userService.addUser(newUser);

   this.router.navigate(['/users']);

 }



}
