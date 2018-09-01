import { Component, OnInit, Input } from '@angular/core';
import { HotsroleService } from '../service/hotsrole.service';

@Component({
  selector: 'app-hotsrole',
  templateUrl: './hotsrole.component.html',
  styleUrls: ['./hotsrole.component.css']
})
export class HotsroleComponent implements OnInit {

    @Input() hotsClasse: string;
    @Input() hotsWin: number;
    @Input() hotsLose: number;
    @Input() index: number;

  constructor(private hotsroleService: HotsroleService) { }

  ngOnInit() {
  }
  getWin(){
      return this.hotsWin;
  }
  getLose(){
      return this.hotsLose;
  }
  getColor(){
     if ( this.hotsWin>this.hotsLose ){return"green";}
     else if(this.hotsWin<this.hotsLose) {return "red";}
     else {return "orange";}

  }

onWin(){

 this.hotsroleService.onW(this.index);

}

onLose(){

    this.hotsroleService.onL(this.index);
}

}
