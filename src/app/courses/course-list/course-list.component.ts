import { Component, OnInit } from '@angular/core';
import { ICommandName } from 'selenium-webdriver';
import { ICourse } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  pageTitle : string = "Course List";
  imageVisible : boolean;
  //imageText : string = "Show Image";
 // filterText : string = "Angular";
  filteredCourses: ICourse[];

  _listFilter: string; 

    get listFilter() { 
     return this._listFilter; 
  } 

  set listFilter(value: string) { 
       this._listFilter = value; 
      this.filteredCourses = this._listFilter ? this.performFilter() : this.courses; 
      } 
    



  courses : ICourse [];
  errorMessage : string ;

  constructor(public CourseService : CourseService) { }

  ngOnInit() {
    this.CourseService.getService()
    .subscribe(
        (response) => { 
          this.courses = response;
          this.filteredCourses = this.courses;
        },
        error => {
        this.errorMessage = "Error Occured";

        }
        
        )
    
    
  }

  showImage(){
    this.imageVisible = ! this.imageVisible;
    //this.imageText = this.imageVisible ? "Hide Image" : "Show Image";
  }

  performFilter() : ICourse[] { 
        let filterBy = this.listFilter.toLocaleLowerCase(); 
        return this.courses.filter((item) => (item.courseName.toLocaleLowerCase() == filterBy));     
      } 
    
      onRatingClicked(event) {
        this.pageTitle = `Course List ${event.rating} rating was clicked`;
        console.log(`Course List ${event.rating} rating was clicked`);
      }

  }

