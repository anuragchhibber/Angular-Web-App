import { Component, OnInit, Input } from '@angular/core';
import { CoursesComponent } from '../courses/courses.component';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input() isFavorite: boolean;

  constructor() { } 

  ngOnInit(): void {
  }

  onClick(){
    this.isFavorite = !this.isFavorite;
}

}
