import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  URL : string = "https://raw.githubusercontent.com/Swadreams/Angular-Batch-Project/master/src/api/courses/courses.json"
 
  constructor(private http : HttpClient) { }

  getService() : Observable<any> {
return this.http.get(this.URL);

   //  .pipe(
              //    tap(response => console.log(response)),
              //    catchError(this.errorHandling)
              //  )


  }
}
