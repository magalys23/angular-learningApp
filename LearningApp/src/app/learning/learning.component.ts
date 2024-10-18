import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Course } from '../model/Course';


@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [],
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {
  course!: Course;

  constructor(private service: CourseService) {}

  ngOnInit(): void {
    this.course = this.service.getCourse();
  }
}
