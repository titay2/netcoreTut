import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {}
  loggedin: boolean;
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }
  login() {
    this.accountService.login(this.model).subscribe(res => {
      console.log(res);
      this.loggedin = true
    }, error => {
      console.log(error);
    })
  }
  logout() {
    this.loggedin = false;
  }
}
