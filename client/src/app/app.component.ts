import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Client App';
  user: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.http.get('https://localhost:44370/api/users').subscribe(res => {
      console.log(res);
      this.user = res;
    }, error => { console.error(); }

    )
  }

}
