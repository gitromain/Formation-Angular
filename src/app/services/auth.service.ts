import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;

  signIn() {
    this.isAuth = false;
  }

  signOut(){
    this.isAuth = false;
  }
}
