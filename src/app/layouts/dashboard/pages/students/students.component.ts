import { Component, OnInit } from '@angular/core';
import { IStudent } from './models';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';
import { v4 as uuidv4 } from 'uuid';
import { Observable, find, take } from 'rxjs';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'address', 'age', 'email', 'createdAt', 'manage'];
  students: IStudent[] = []
  constructor(private matDialog: MatDialog, private studentsService: StudentsService) { }
  ngOnInit(): void {
    this.studentsService.getStudentsList().subscribe({
      next: (students) => {
        this.students = students
      },
      error: () => {
        alert('Error al realizar la petición')
      },
      complete: () => { }
    })
  }
  openDialog(student?: IStudent): void {
    this.matDialog.open(StudentDialogComponent, {
      data: student
    }).afterClosed().subscribe({
      next: (result) => {
        if (result) {
          if (student) {
            this.students = this.students.map((element) => element.id === student.id ? { ...element, ...result } : element)
          } else {
            result.id = uuidv4().substring(0, 8)
            result.createdAt = new Date()
            this.students = [...this.students, result]
          }
        }
      }
    })
  }

  removeStudent(id: string): void {
    this.students = this.students.filter(student => student.id !== id)
  }
}
