import { Injectable } from "@angular/core";
import { IStudent } from "./models";
import { Observable, of } from "rxjs";

const STUDENTS_ARRAY: IStudent[] = [
    {
      id: "1",
      firstName: "Pedro",
      lastName: "Rivas",
      address: "Santo Domingo 1410",
      age: 36,
      email: "pedromanuelrivas@gmail.com",
      createdAt: new Date()
    },
    {
      id: "2",
      firstName: "Josefina",
      lastName: "Rondon",
      address: "Santo Domingo 1410",
      age: 36,
      email: "josefina@gmail.com",
      createdAt: new Date()
    }
  ]

@Injectable({ providedIn: 'root'})
export class StudentsService {
    getStudentsList(): Observable<IStudent[]> {
        return of(STUDENTS_ARRAY)
    }
}