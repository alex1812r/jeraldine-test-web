import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, switchMap } from 'rxjs';
import { IStudent } from './student.types';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentsList: { items: IStudent[], count: number } = {
    items: [],
    count: 0
  }

  constructor(
    private _httpClient: HttpClient
  ) {}

  getStudents() {
    return this._httpClient.get('students').pipe(switchMap((response: any) => {
      this.studentsList.items = response.items;
      this.studentsList.count = response.count;
      return of(this.studentsList)
    }))
  }
}
