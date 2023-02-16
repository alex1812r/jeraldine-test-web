import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { IStudent } from 'src/app/core/student/student.types';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class StudentsTableComponent implements OnChanges {
 
  @Input('students') dataSource: IStudent[] = [];
  displayedColumns: string[] = [
    'ID', 
    'Name', 
    'Gender',
    'Class',
    'Club',
    'Persona',
    'Crush',
    'BreastSize',
    'Stockings',
    'Strength',
    'Hairstyle',
    'Accessory',
  ];
  columnsToDisplayWithExpand = [...this.displayedColumns,'expand',];
  expandedElement: IStudent | null = null;
  gradesAverage = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['dataSource']) {
      const students = changes['dataSource'].currentValue;
      let sum = 0;
      students.forEach((item: IStudent) => sum += item.grades)
      this.gradesAverage = sum > 0 ? +(sum / students.length).toFixed(2) : 0;

    }
  }

}