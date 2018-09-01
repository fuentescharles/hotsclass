import { Subject } from 'rxjs';

export class HotsroleService {

hotsrolesSubject = new Subject<any[]>();


    hotsroles = [

        {   id:1,
            role: "Guerrier",
            win: 0,
            lose:0
        },
        {   id:2,
            role: "Assasin",
            win: 0,
            lose:0
        },
        {   id:3,
            role: "Healer",
            win: 0,
            lose:0
        }
    ];


emitHotsroleSubject(){
    this.hotsrolesSubject.next(this.hotsroles.slice());
}

onW(i:number){

    this.hotsroles[i].win = this.hotsroles[i].win + 1;
    this.emitHotsroleSubject();

}

onL(i:number){

    this.hotsroles[i].lose = this.hotsroles[i].lose + 1;
    this.emitHotsroleSubject();

}

addHero(role: string) {

    const hotsroleObject = {
        id: 0,
      role: '',
      win: 0,
      lose: 0
    };

    hotsroleObject.role = role;

    hotsroleObject.win = 0;

    hotsroleObject.lose = 0;

    hotsroleObject.id = this.hotsroles[(this.hotsroles.length - 1)].id + 1;

    this.hotsroles.push(hotsroleObject);

    this.emitHotsroleSubject();

}

}
