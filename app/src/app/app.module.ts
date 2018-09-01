import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HotsroleComponent } from './hotsrole/hotsrole.component';
import { HotsroleService } from'./service/hotsrole.service';
import { AuthComponent } from './auth/auth.component';
import { HotsroleViewComponent } from './hotsrole-view/hotsrole-view.component';
import {RouterModule} from '@angular/router';
import { Routes } from '@angular/router';
import {AuthService} from'./service/auth.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AddheroComponent } from './addhero/addhero.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {UserService} from './service/user.service';
import { UserlistComponent } from './userlist/userlist.component';
import { NewuserComponent } from './newuser/newuser.component';
import { TestComponent } from './test/test.component'


const appRoutes: Routes = [

  { path: 'hotsroles', component: HotsroleViewComponent },
  { path: 'addhero',  component: AddheroComponent },


  { path: 'users', component: UserlistComponent },

  { path: 'new-user', component: NewuserComponent },

  { path: 'auth', component: AuthComponent },

  { path: 'test', component: TestComponent},

  { path: '', component: HotsroleViewComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HotsroleComponent,
    AuthComponent,
    HotsroleViewComponent,
    AddheroComponent,
    UserlistComponent,
    NewuserComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
     RouterModule.forRoot(appRoutes),
     FontAwesomeModule
  ],
  providers: [
      HotsroleService,
      AuthService,
      UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
