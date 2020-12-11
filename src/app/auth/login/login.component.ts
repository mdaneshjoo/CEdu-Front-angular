import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    // this.authService.login({
    //   userName: 'emdjo',
    //   password: '89080'
    // });

  }

  showtoast(){
    console.log('test');
    this.messageService.add({
      severity: 'error',
      summary: 'Authentication Failed',
      detail: 'API Key or URL is invalid.',
    });
  }

}
