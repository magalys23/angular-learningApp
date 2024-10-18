import { Injectable } from '@angular/core';
import { studentData } from "../data/studentData";
import { Course } from '../model/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private course: Course=studentData;
  constructor() { }

  getCourse(): Course {
    return this.course;
  }
}
