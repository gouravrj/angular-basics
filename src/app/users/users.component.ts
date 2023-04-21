import { Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users:{userEmail:string,Name:string,userPhone:string}[]=[]

    constructor(private userService:UserService){      //Subscribing to this Service  //Injecting to the Constructor

    }
    ngOnInit(): void {
        this.users = this.userService.listUserData();
    }

  // onAddUserData(event:any)
  // {
  //   this.users.push(event);
  // }
}
