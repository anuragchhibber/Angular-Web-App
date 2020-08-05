import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html'
})

export class CoursesComponent{
    title1 = "List of Courses: ";
    image = "http://lorempixel.com/500/300";
    colSpan = 1;
    isActive = true;
    email = "me@angular.com";
    courses;
    
    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }

    onDivClicked(){
        console.log("Div Clicked");
    }

    onSave($event){
        //Stopping event bubbling - no call to onDivClicked method
        $event.stopPropagation();

        console.log("Button was clicked", $event);
    }

    onKeyUp(){
        console.log(this.email);
    }


}
