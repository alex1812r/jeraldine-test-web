import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/core/student/student.service';
import { IStudent } from 'src/app/core/student/student.types';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  students: IStudent[] = [];

  constructor(
    private studentSvc: StudentService
  ) {}

  ngOnInit(): void {
    this.studentSvc.getStudents().subscribe({
        next: (studentsList) => {
          this.students = studentsList.items;
        },
        error: () => {

        }
    });
  }

}
