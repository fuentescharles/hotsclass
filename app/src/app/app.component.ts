import { Component, OnInit,OnDestroy } from '@angular/core';
import { HotsroleService } from './service/hotsrole.service';
import { Observable} from 'rxjs';
import {  interval  } from 'rxjs';
import {Subscription } from 'rxjs';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';


// Add an icon to the library for convenient access in other components
library.add(faTwitter,fas,far);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit,OnDestroy {

secondes: number;
intervalSubscription: Subscription;

  ngOnInit() {

    //const counter = Observable.interval(1000);
    this.intervalSubscription=interval(1000).subscribe(

      (value) => {

        this.secondes = value;

      },

      (error) => {

        console.log('Uh-oh, an error occurred! : ' + error);

      },

      () => {

        console.log('Observable complete!');

      }

    );

  }


  ngOnDestroy() {

   this.intervalSubscription.unsubscribe();

 }

}
