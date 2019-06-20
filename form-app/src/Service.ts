import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import {HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import {User} from "./User";


const httpOptions = {
    headers   : new HttpHeaders({'Content-Type' : 'application/json'})
}

@Injectable()
export class Service {
    
        constructor(private http: HttpClient) {

    }

    getUsers() : Observable<User[]>{
        return this.http.get<User[]>("http://localhost:3003/submit");
    }

    savePost(user : User) : Observable<User>{
        return this.http.post<User>("http://localhost:3003/submit" , user , httpOptions)
    }


}