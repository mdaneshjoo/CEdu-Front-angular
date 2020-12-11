import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {_ErrorHandler} from '../../errorHandler/errorHandler';
import {en} from '../../../languages/en';
import {Observable,throwError} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  showtoast() {
    this.authService.login({
      userName: 'emdjoo',
      password: '89080'
    }).subscribe(res => {
      if (res) {
       return this.router.navigate(['/']);
      }
    },error => {
      new _ErrorHandler(error,this.messageService)
    });
  }

}
