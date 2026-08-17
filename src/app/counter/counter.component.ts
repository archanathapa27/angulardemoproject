/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
 */

 import { Component } from '@angular/core';

 @Component({
   selector: 'app-counter',
   template: `
     <div>
       <h2>Counter: {{ count }}</h2>
       <button (click)="increment()">+</button>
       <button (click)="decrement()">-</button>
       <button (click)="reset()">Reset</button>
     </div>
   `
 })
 export class CounterComponent {
   count: number = 0;

   increment(): void {
     this.count++;
   }

   decrement(): void {
     this.count--;
   }

   reset(): void {
     this.count = 0;
   }
 }
