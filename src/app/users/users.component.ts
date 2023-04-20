import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users:{userName:string,Name:string,userPhone:string}[]=[]

  onAddUserData(event:any)
  {
    this.users.push(event);
  }
}
