import { Component, EventEmitter, Output,OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit{
  @Output() public addUserData = new EventEmitter();

  constructor(private userService:UserService){

  }

  ngOnInit(): void {

  }


  onSubmit(username:string,name:string,phone:string)
  {
    const user = {
      userName : username,
      Name : name,
      userPhone : phone
    }

    this.userService.addUserData(user)
  }
}
