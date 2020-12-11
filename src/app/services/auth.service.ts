import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {IAuthBody} from '../../interfaces/auth/authBody.interface';
import {IAPIResponse} from '../../interfaces/ApiResponse';
import {config} from '../../environments/config';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';
import {en} from '../../languages/en';
import {IUser} from '../../interfaces/User.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  public login(body: IAuthBody): void {
    this.http.post(environment.urlApiV1 + 'auth/login', body).subscribe((res: IAPIResponse) => {
      if (res && res.data) {
        console.log(res);
        localStorage.setItem(config.LOCAL_STORAGE_AUTH_TOKEN_KEY, res.data.token);
        this.currentUser = res.data.user;
        this.router.navigate(['/']);
      } else {
        throw new Error(en.CAN_NOT_LOGIN);
      }
    });

  }

  getToken() {
    return localStorage.getItem(config.LOCAL_STORAGE_AUTH_TOKEN_KEY);
  }

  isLoggedIn() {
    const jwtHelper = new JwtHelperService();
    if (!this.getToken()) {
      return false;
    }
    return !jwtHelper.isTokenExpired(this.getToken());
  }

}
