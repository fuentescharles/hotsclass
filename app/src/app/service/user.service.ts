import { User } from '../model/user.model';

import { Subject } from 'rxjs';


export class UserService {

  private users: User[]= [new User("FUENTES","Charles","18","Mars","1992","F@C.FR","FDP66","Heal",)]; //il faut enregistrer un utilisateur min avec User[]=[new User()] où User() va le créer à partir du model

  userSubject = new Subject<User[]>();


  emitUsers() {

    this.userSubject.next(this.users.slice());

  }


  addUser(user: User) {

    this.users.push(user);

    this.emitUsers();

  }

}
