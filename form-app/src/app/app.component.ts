import { Component, ViewChild, ElementRef } from '@angular/core';
import {Service} from "../Service";
import {User} from "../User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent{
  user : User = {
    name : '',
    password:''
  }


  // @ViewChild('name') nameInputRef:ElementRef;

  constructor( private service : Service) {

  }


  add(){
    // const name =  this.nameInputRef.nativeElement.value;
    this.service.savePost(this.user as User).subscribe(
      post => {
        console.log(post)
      }
    ) 
}

showUsers(){
  this.service.getUsers().subscribe(user => console.log(user));
}



}