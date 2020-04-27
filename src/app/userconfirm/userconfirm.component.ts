import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-userconfirm',
  templateUrl: './userconfirm.component.html',
  styleUrls: ['./userconfirm.component.css']
})
export class UserconfirmComponent implements OnInit {

  constructor(private appService: AppService) { }

  user: any;

  ngOnInit(): void {
    this.user = this.appService.userData;
  }

}
