import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsListComponent } from './students-list.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { MaterialModule } from 'src/app/material/material.module';
import { GradesAveragePipe } from './pipes/grades-average.pipe';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APIInterceptor } from 'src/app/api.interceptor';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true
    }
  ],
  declarations: [
    StudentsListComponent,
    StudentsTableComponent,
    GradesAveragePipe,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
})
export class StudentsListModule { }
