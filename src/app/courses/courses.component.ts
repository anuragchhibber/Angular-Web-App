import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html'
})

export class CoursesComponent{
    title1 = "List of Courses: ";
    image = "http://lorempixel.com/400/200";
    courses;
    
    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }


}
