import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users:{userEmail:string,Name:string,userPhone:string}[]=[
    {
      userEmail:"gourav.raj42001@gmail.com",
      Name:"Gourav",
      userPhone:"7008983469",
    },
    {
      userEmail:"chirag.raj42001@gmail.com",
      Name:"Chirag",
      userPhone:"7008983469",
    },
  ]

  addUserData(user:any){
    this.users.push(user)
  }
  listUserData(){
    return this.users;
  }
}
