import { Component } from '@angular/core';
import { ICourses } from './models';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  displayedColumns: string[] = ['id', 'name', 'duration'];
  courses: ICourses[] = []
  constructor( private coursesService: CoursesService ) { }
  ngOnInit(): void {
    this.coursesService.getCoursesList().subscribe({
      next: (courses) => {
        this.courses = courses
      },
      error: () => {
        alert('Error al realizar la petición')
      },
      complete: () => { }
    })
  }
}
