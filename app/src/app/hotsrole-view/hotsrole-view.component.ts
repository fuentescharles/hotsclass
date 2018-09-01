import { Component, OnInit,OnDestroy } from '@angular/core';
import { HotsroleService } from '../service/hotsrole.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-hotsrole-view',
  templateUrl: './hotsrole-view.component.html',
  styleUrls: ['./hotsrole-view.component.css']
})
export class HotsroleViewComponent implements OnInit {

    hotsroles: any[];
    isAuth=false;
    hotsroleSubscription: Subscription;

  constructor(private hotsroleService: HotsroleService) { }

  ngOnInit() {

    this.hotsroleSubscription=this.hotsroleService.hotsrolesSubject.subscribe(
        (hotsroles: any[])=>{
            this.hotsroles=hotsroles
        }
    );
    this.hotsroleService.emitHotsroleSubject();
  }

  ngOnDestroy() {
   this.hotsroleSubscription.unsubscribe();
 }


}
