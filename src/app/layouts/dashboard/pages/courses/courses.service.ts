import { Injectable } from "@angular/core";
import { ICourses } from "./models";
import { Observable, of } from "rxjs";

const COURSES_ARRAY: ICourses[] = [
    {
        id: "1",
        name: "Castellano",
        duration: 25
    },
    {
        id: "2",
        name: "Matematica",
        duration: 25
    }
]

@Injectable({ providedIn: 'root' })
export class CoursesService {
    getCoursesList(): Observable<ICourses[]> {
        return of(COURSES_ARRAY)
    }
}