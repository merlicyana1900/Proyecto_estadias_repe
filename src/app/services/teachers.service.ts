import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeachersService {
  constructor() {}

  get isNewTeacher(): boolean {
    const isNewTeacher = sessionStorage.getItem('isNewTeacher');
    return isNewTeacher ? JSON.parse(isNewTeacher) : true;
  }

  set isNewTeacher(value: boolean) {
    sessionStorage.setItem('isNewTeacher', JSON.stringify(value));
  }
}
