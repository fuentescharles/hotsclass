import { Component, OnInit,OnDestroy } from '@angular/core';
import { User } from '../model/user.model';
import {Subscription } from 'rxjs';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {


    users: User[];

      userSubscription: Subscription;


      constructor(private userService: UserService) { }


      ngOnInit() {

        this.userSubscription = this.userService.userSubject.subscribe(

          (users: User[]) => {

            this.users = users;

          }

        );

        this.userService.emitUsers();

      }




      ngOnDestroy() {

        this.userSubscription.unsubscribe();

      }


    }
