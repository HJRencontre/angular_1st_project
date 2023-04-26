import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {

  users : any;

  constructor(private userService : UserService) {

  }

  ngOnInit() {
    let userData = this.userService.getData();

    userData.subscribe(res => {
      this.users = res;
    });
  }

}