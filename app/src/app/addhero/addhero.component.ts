import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HotsroleService} from'../service/hotsrole.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-addhero',
  templateUrl: './addhero.component.html',
  styleUrls: ['./addhero.component.css']
})
export class AddheroComponent implements OnInit {

    constructor(private hotsroleService: HotsroleService,
                private router: Router) { }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
      const hero = form.value['hero'];
      this.hotsroleService.addHero(hero);
      this.router.navigate(['/hotsroles']);
    }

  }
