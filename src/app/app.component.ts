import { Component } from '@angular/core';
import { Subject } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'subject';
  subject$ = new Subject();
 
  ngOnInit() {
    
    this.subject$.subscribe(val => {
      console.log(val);
    });
 
    this.subject$.next("1");
    this.subject$.next("2");
  }
  send(){
    this.subject$.next("2333");
    this.subject$.complete();
  }
}
