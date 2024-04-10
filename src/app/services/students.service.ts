import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor() {}

  get isNewStudent(): boolean {
    const isNewStudent = sessionStorage.getItem('isNewStudent');
    return isNewStudent ? JSON.parse(isNewStudent) : true;
  }

  set isNewStudent(value: boolean) {
    sessionStorage.setItem('isNewStudent', JSON.stringify(value));
  }
}
