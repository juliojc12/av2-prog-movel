import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth) { }

  login (user: User) {
    return this.fireauth.signInWithEmailAndPassword(user.email, user.password);
  }

  register(user: User) {
    return this.fireauth.createUserWithEmailAndPassword(user.email, user.password);
  }

  logout(){
    return this.fireauth.signOut();
  }

  getAuth(){
    return this.fireauth;
  }
}
