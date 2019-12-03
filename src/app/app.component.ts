import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Component({
  selector: 'app-root', // no need of this now as using inside router outlet
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  constructor(private http: HttpClient) { }
  title = 'First App';
  myname = 'Kamta sahu';
  email = 'kamta.sahu@samsung.com';
  data: any;

  getBooks(){
    console.log("getBooks called");
    //this.data = this.http.get("https://jsonplaceholder.typicode.com/todos/1");    
    this.data = this.http.get("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata");
    console.log(this.data);
    return this.data;
  }
}
