import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  get isNewUser(): boolean {
    const isNewUser = sessionStorage.getItem('isNewUser');
    return isNewUser ? JSON.parse(isNewUser) : true;
  }

  set isNewUser(value: boolean) {
    sessionStorage.setItem('isNewUser', JSON.stringify(value));
  }
}
