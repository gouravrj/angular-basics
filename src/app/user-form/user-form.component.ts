import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Output() public addUserData = new EventEmitter();

  onSubmit(username:string,name:string,phone:string)
  {
    const user = {
      userName : username,
      Name : name,
      userPhone : phone
    }
    console.log(user)
    this.addUserData.emit(user);
  }
}
