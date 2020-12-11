import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {IAuthBody} from '../../interfaces/auth/authBody.interface';
import {IAPIResponse} from '../../interfaces/ApiResponse';
import {config} from '../../environments/config';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser = JSON.parse(localStorage.getItem(config.LOCAL_STORAGE_USER_DETAIL));

  constructor(
    private http: HttpClient,
  ) {
  }

  public login(body: IAuthBody): Observable<any> {
    return this.http.post(environment.urlApiV1 + 'auth/login', body).pipe(
      map((res: IAPIResponse) => {
        if (res && res.data) {
          localStorage.setItem(config.LOCAL_STORAGE_AUTH_TOKEN_KEY, res.data.token);
          localStorage.setItem(config.LOCAL_STORAGE_USER_DETAIL, JSON.stringify(res.data.user));
          return true;
        }
        return false;
      })
    );


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
